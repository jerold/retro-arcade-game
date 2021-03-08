import 'dart:math';

import 'util.dart';

enum PatternType {
  train,
  test,
}

enum LayerType {
  input,
  hidden,
  output,
}

// weights are initialized to a random value between -0.3 and 0.3
final _rand = Random();
num randomInitialWeight() => _rand.nextInt(6000) / 10000 - .3;

// RBF used in Hidden layer output calculation
num radialBasisFunction(num norm, num sigma) => 1 / sqrt(norm * norm + sigma * sigma);

// used in calculating Sigma based on center locations
num euclidianDistance(List<num> p, List<num> q) {
  var sumOfSquares = 0.0;
  for (var i = 0; i < p.length; i++) {
    sumOfSquares += (p[i] - q[i]) * (p[i] - q[i]);
  }
  return sqrt(sumOfSquares);
}

// combined sum of the difference between two vectors
num outputError(List<num> p, List<num> q) {
  var eSum = 0.0;
  for (var i = 0; i < p.length; i++) {
    eSum += (p[i] - q[i]).abs();
  }
  return eSum;
}

// combination of two vectors
num linearCombination(List<num> p, List<num> q) {
  var lSum = 0.0;
  for (var i = 0; i < p.length; i++) {
    lSum += p[i] * q[i];
  }
  return lSum;
}

List<num> vectorizeMatrix(List<List<num>> p) => p.expand((e) => e);

class Neuron {
  Layer layer;

  num sigma;
  num input = 0.0;
  num output = 0.0;

  List<num> centers = <num>[];
  List<num> weights = <num>[];
  List<num> weightDeltas = <num>[];

  Neuron(this.layer) {
    if (layer.prev != null) {
      for (var i = 0; i < layer.prev.neurons.length; i++) {
        weights.add(randomInitialWeight());
        weightDeltas.add(0.0);
      }
    }
  }
}

class Layer {
  RBFNetwork network;
  LayerType layerType;
  Layer prev;
  Layer next;
  List<Neuron> neurons;

  Layer(this.network, this.layerType, this.prev, int length) {
    if (prev != null) {
      prev.next = this;
    }
    neurons = List<Neuron>.generate(length, (index) => Neuron(this), growable: false);
  }

  void setInputs(List<num> inputs) {
    if (inputs.length != neurons.length) {
      throw Exception('Input dimension of network does not match that of pattern!');
    }
    for (var i = 0; i < neurons.length; i++) {
      neurons[i].input = inputs[i];
    }
  }

  List<num> getOutputs() => neurons.map((n) => n.output).toList();

  // adjusting weights is done on the output layer in order to scale the output of a neuron's RBF function
  void adjustWeights(List<num> targets) {
    if (targets.length != neurons.length) {
      throw Exception('Output dimension of network does not match that of pattern!');
    }
    final prevOutputs = prev.getOutputs();
    for (var i = 0; i < neurons.length; i++) {
      for (var j = 0; j < prevOutputs.length; j++) {
        neurons[i]
          ..weightDeltas[j] = network._eta * targets[i] - neurons[i].output * prevOutputs[j]
          ..weights[j] = neurons[i].weights[j] + neurons[i].weightDeltas[j];
        if (neurons[i].weights[j] > 9999999) {
          throw Exception('Divergent Weights!');
        }
      }
    }
  }

  // Each layer has a link to the next layer in order. Input values are translated from input
  // to output in keeping with the layer's function
  void feedForward() {
    switch (layerType) {
      case LayerType.input:
        // Input layer feeds all input to output with no work done
        neurons.forEach((n) => n.input = n.output);
        next.feedForward();
        break;
      case LayerType.hidden:
        // RBF on the Euclidian Norm of input to center
        final prevOutputs = prev.getOutputs();
        neurons.forEach((n) {
          n.input = euclidianDistance(prevOutputs, n.centers);
          n.output = radialBasisFunction(n.input, n.sigma);
        });
        next.feedForward();
        break;
      case LayerType.output:
        // Linear Combination of Hidden layer outputs and associated weights
        final prevOutputs = prev.getOutputs();
        neurons.forEach((n) {
          if (n.weights.length != prevOutputs.length) {
            throw Exception('Weights dimension does not match that of previous Layer outputs!');
          }
          n.output = linearCombination(prevOutputs, n.weights);
        });
    }
  }
}

class Pattern {
  List<int> target;
  List<num> input;

  Pattern._(this.target, this.input);

  factory Pattern.fromRaw(List<int> raw) {
    // target contains an array representing the piece rotation and x offset
    var target = raw.sublist(1, 16);
    if (target.length != rs.length + xs.length) {
      throw Exception('Patter target is not the correct dimensions ${target.length} != ${rs.length + xs.length}');
    }

    // patterns were saved as an int value 0-board_y, normalize between 0-1
    var input = <num>[];
    raw.sublist(16).forEach((element) {
      input.add(element / board_y);
    });
    if (input.length != board_x) {
      throw Exception('Patter input is not the correct dimensions ${input.length} != ${board_x}');
    }

    return Pattern._(target, input);
  }
}

class PatternSet {
  // used to find centers and sigmas for cases that produced the same output
  final Map<String, List<Pattern>> patternsByTargetType = <String, List<Pattern>>{};
  final List<Pattern> patterns;

  final int inputMagnitude;
  final int targetMagnitude;

  PatternSet(this.patterns)
      : inputMagnitude = patterns.first.input.length,
        targetMagnitude = patterns.first.target.length {
    patterns.forEach((p) {
      final k = p.target.join();
      if (!patternsByTargetType.containsKey(k)) {
        patternsByTargetType[k] = <Pattern>[];
      }
      patternsByTargetType[k].add(p);
    });
  }
}

class RBFNetwork {
  String _identifier;
  // step size when performing gradient descent
  num _eta = 1.0;
  num _absErr = 100;

  Layer _inputLayer;
  Layer _hiddenLayer;
  Layer _outputLayer;

  List<List<num>> _centers;
  List<List<num>> _sigmas;

  RBFNetwork(this._identifier, PatternSet ps) {
    _inputLayer = Layer(this, LayerType.input, null, ps.inputMagnitude);
    _hiddenLayer = Layer(this, LayerType.hidden, _inputLayer, ps.targetMagnitude);
    _outputLayer = Layer(this, LayerType.output, _hiddenLayer, ps.targetMagnitude);
    buildCentersAndSigmas(ps);
  }

  // centers are build in two steps
  // 1) aveerage is built for each target (from patterns of matching that target type)
  // 2) run k-means on the new centers against all patterns
  // sigmas are calculated for each element
  void buildCentersAndSigmas(PatternSet ps) {
    _centers = buildMeans(ps.patternsByTargetType.values);
    // k-means to soften centers, (less strictly associated to
    // patterns of a single target type and more for all patterns)
    var dist = 2.0;
    var distDelta = 2.0;
    while (dist > 1 && distDelta.abs() > 0.1) {
      final newCenters = adjustCenters(ps.patterns, _centers);
      var newDist = 0.0;
      for (var i = 0; i < _centers.length; i++) {
        newDist = newDist + euclidianDistance(_centers[i], newCenters[i]);
      }
      _centers = newCenters;
      distDelta = newDist - dist;
      dist = newDist;
    }
    _sigmas = buildSigmas(membership(ps.patterns, _centers), _centers);

    print(
        '$_identifier TargetTypes:${ps.patternsByTargetType.keys.length} centers:${_centers.length} sigmas:${_sigmas.length}');
  }
}

List<List<num>> buildMeans(Iterable<List<Pattern>> patterns) => patterns.map(buildInputMean).toList();

// given several patterns for the same targetType generate an average input
List<num> buildInputMean(List<Pattern> patterns) {
  var mean = List<num>.filled(patterns.first.input.length, 0.0);
  patterns.forEach((p) {
    for (var i = 0; i < mean.length; i++) {
      mean[i] = mean[i] + p.input[i];
    }
  });
  for (var i = 0; i < mean.length; i++) {
    mean[i] = mean[i] / patterns.length;
  }
  return mean;
}

List<List<num>> buildSigmas(List<List<Pattern>> members, List<List<num>> centers) {
  if (members.length != centers.length) {
    throw Exception('Unable to make Sigma when members and centers have different lengths!');
  }
  final s = List<List<num>>.generate(centers.length, (_) => <num>[]);
  for (var i = 0; i < centers.length; i++) {
    s[i] = buildInputSigma(members[i], centers[i]);
  }
  return s;
}

// sigmas represent how spread out from the mean a pattern set's outputs are
List<num> buildInputSigma(List<Pattern> patterns, List<num> center) {
  var sigma = List<num>.filled(center.length, 0.0, growable: false);
  // sum over square of distances from means
  for (var i = 0; i < sigma.length; i++) {
    patterns.forEach((p) {
      sigma[i] = sigma[i] + (p.input[i] - center[i]) * (p.input[i] - center[i]);
    });
    sigma[i] = sqrt(1 / patterns.length * sigma[i]);
  }
  return sigma;
}

// assign patterns to their nearest center, then use the new assignmentsto make new centers
List<List<num>> adjustCenters(List<Pattern> patterns, List<List<num>> centers) {
  return membership(patterns, centers).map(buildInputMean).where((c) => c.isNotEmpty).toList();
}

// returns a list with the same length as centers, where each element is a list of
// patterns identified as closest to that center.
List<List<Pattern>> membership(List<Pattern> patterns, List<List<num>> centers) {
  final members = List<List<Pattern>>.generate(centers.length, (_) => <Pattern>[]);
  patterns.forEach((p) {
    var dBest = euclidianDistance(p.input, centers[0]);
    var iBest = 0;
    for (var i = 1; i < centers.length; i++) {
      final dist = euclidianDistance(p.input, centers[i]);
      if (dist < dBest) {
        dBest = dist;
        iBest = i;
      }
    }
    members[iBest].add(p);
  });
  return members;
}
