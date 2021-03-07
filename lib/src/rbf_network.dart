import 'dart:math';

final rand = Random();

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
num randomInitialWeight() => rand.nextInt(6000) / 10000 - .3;

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
          ..weightDeltas[j] = network.eta * targets[i] - neurons[i].output * prevOutputs[j]
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

class RBFNetwork {
  // step size when performing gradient descent
  num eta = 1.0;
  num absErr = 100;

  Layer inputLayer;
  Layer hiddenLayer;
  Layer outputLayer;

  RBFNetwork(int inputMagnitude, int outputMagnitude) {
    inputLayer = Layer(this, LayerType.input, null, inputMagnitude);
    hiddenLayer = Layer(this, LayerType.hidden, inputLayer, outputMagnitude);
    outputLayer = Layer(this, LayerType.output, hiddenLayer, outputMagnitude);
    buildCenters();
  }

  void buildCenters() {
    // TODO: have the brute force ai run and collect its inputs & output
    // use this to generate a set of centers to pre-configure the network with
  }
}
