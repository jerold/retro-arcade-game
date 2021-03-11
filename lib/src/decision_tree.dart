import 'dart:math';

import 'util.dart';

class DecisionTree {
  // analytic on how complex the search space was
  static int _branchCount = 0;
  static int get branchCount => _branchCount;

  // For Branch: the x actions taken to produce _result
  // For Head: the x action of the branch with the highest fitness
  int _ox;
  int get x => _ox;

  // For Branch: the x actions taken to produce _result
  // For Head: the x action of the branch with the highest fitness
  int _or;
  int get r => _or;

  // the result of applying the x and r actions
  List<List<int>> _result;

  // is provided input even valid, if not _result will be null
  bool _valid;
  bool get valid => _valid;

  // actions and results branching forward from this one
  final _branches = <DecisionTree>[];
  int get _branchesScore => _branches.fold(0, (childScores, b) => childScores + b.score);

  // scored points from this action used in total recursive scroling below
  int _score;
  int get score => _valid ? _score + _branchesScore + _headspace - _voids : 0;

  // part of the branch's fitness function
  int _headspace;
  int _voids;

  // head returns a score for it's possible children x and r values
  // from its top scoring branch;
  DecisionTree.head(List<List<int>> b, List<int> q, int maxDepth) {
    _branchCount = 0;
    _result = b;
    _score = 0;
    _headspace = headspace(_result);
    _voids = voids(_result);

    if (q.isNotEmpty) {
      final depth = 0;
      final i = q[depth];
      for (var br = 0; br < piece_rs[i]; br++) {
        for (final bx in xs) {
          if (_branches.length < 10 || topoDelta(bx, br, i, boardTopology(b)) == 0) {
            final branch = DecisionTree(bx, br, q, depth, maxDepth, _result);
            if (branch.valid) {
              _branches.add(branch);
            }
          }
        }
      }
    }
    _valid = _branches.isNotEmpty;
    if (_valid) {
      var _bestBranchIndex = 0;
      var _bestBranchScore = _branches[_bestBranchIndex].score;
      for (var i = 0; i < _branches.length; i++) {
        final branchScore = _branches[i].score;
        if (branchScore > _bestBranchScore) {
          _bestBranchIndex = i;
          _bestBranchScore = branchScore;
        }
      }

      final bestBranch = _branches[_bestBranchIndex];
      _or = bestBranch.r;
      _ox = bestBranch.x;
      print('best:${topoDelta(_ox, _or, q[0], boardTopology(b))}');
    }
  }

  DecisionTree(this._ox, this._or, List<int> q, int depth, int maxDepth, List<List<int>> b) {
    _branchCount++;
    if (q.isNotEmpty && depth < q.length && isValid(_ox, 0, _or, q[depth], b)) {
      final i = q[depth];
      _valid = true;
      final y = maxValidY(_ox, 0, _or, i, b);
      _result = boardWithPiece(_ox, y, _or, i, b);
      final l = lineClears(_result);
      _score = scoreForLines(l.length);
      _result = boardWithLinesSquashed(_result, l);
      _headspace = headspace(_result);
      _voids = voids(_result);

      if (q.length > depth + 1 && depth + 1 < maxDepth) {
        // OG brute force search, builds a lot of boards
        for (var br = 0; br < piece_rs[i]; br++) {
          for (final bx in xs) {
            final branch = DecisionTree(bx, br, q, depth + 1, maxDepth, _result);
            if (branch.valid) {
              _branches.add(branch);
            }
          }
        }
      }
    } else {
      _valid = false;
    }
  }
}

class TopoTree {
  // analytic on how complex the search space was
  static int _branchCount = 0;
  static int get branchCount => _branchCount;

  // For Branch: the x actions taken to produce _result
  // For Head: the x action of the branch with the highest fitness
  int _ox;
  int get x => _ox;

  // For Branch: the x actions taken to produce _result
  // For Head: the x action of the branch with the highest fitness
  int _or;
  int get r => _or;

  List<List<int>> _result;

  // is provided input even valid, if not _result will be null
  bool _valid;
  bool get valid => _valid;

  // actions and results branching forward from this one
  final _branches = <TopoTree>[];
  int get _branchesScore => _branches.fold(0, (childScores, b) => childScores + b.score);

  // scored points from this action used in total recursive scroling below
  int _score;
  int get score => _valid ? _score + _branchesScore + _headspace - _voids : 0;

  // part of the branch's fitness function
  int _headspace;
  int _voids;

  TopoTree.head(List<List<int>> b, List<int> q, int maxDepth) {
    _branchCount = 0;
    _result = b;
    _score = 0;
    _headspace = headspace(_result);
    _voids = voids(_result);

    final scores = <int, List<int>>{};
    final i = q[0];
    final t = boardTopology(b);
    for (var r = 0; r < piece_rs[i]; r++) {
      for (var xi = 0; xi < xs.length; xi++) {
        final x = xs[xi];
        scores[topoDelta(x, r, i, t)] = [r, x];
      }
    }

    final rankedKeys = [...scores.keys]..sort();
    for (final key in rankedKeys.sublist(0, min(6, rankedKeys.length))) {
      final rs = scores[key];
      final branch = TopoTree(rs[1], rs[0], q, 0, maxDepth, b);
      if (branch.valid) {
        _branches.add(branch);
      }
    }

    _valid = _branches.isNotEmpty;
    if (_valid) {
      var _bestBranchIndex = 0;
      var _bestBranchScore = _branches[_bestBranchIndex].score;
      for (var i = 0; i < _branches.length; i++) {
        final branchScore = _branches[i].score;
        if (branchScore > _bestBranchScore) {
          _bestBranchIndex = i;
          _bestBranchScore = branchScore;
        }
      }

      final bestBranch = _branches[_bestBranchIndex];
      _or = bestBranch.r;
      _ox = bestBranch.x;
    }
  }

  TopoTree(this._ox, this._or, List<int> q, int depth, int maxDepth, List<List<int>> b) {
    _branchCount++;
    if (q.isNotEmpty && depth < q.length && isValid(_ox, 0, _or, q[depth], b)) {
      final i = q[depth];
      _valid = true;
      final y = maxValidY(_ox, 0, _or, i, b);
      _result = boardWithPiece(_ox, y, _or, i, b);
      final l = lineClears(_result);
      _score = scoreForLines(l.length);
      _result = boardWithLinesSquashed(_result, l);
      _headspace = headspace(_result);
      _voids = voids(_result);

      if (q.length > depth + 1 && depth + 1 < maxDepth) {
        final scores = <int, List<int>>{};

        final i = q[depth + 1];
        final t = boardTopology(_result);
        for (var r = 0; r < piece_rs[i]; r++) {
          for (var xi = 0; xi < xs.length; xi++) {
            final x = xs[xi];
            scores[topoDelta(x, r, i, t)] = [r, x];
          }
        }

        final rankedKeys = [...scores.keys]..sort();
        for (final key in rankedKeys.sublist(0, min(6, rankedKeys.length))) {
          final rs = scores[key];
          final branch = TopoTree(rs[1], rs[0], q, depth + 1, maxDepth, _result);
          if (branch.valid) {
            _branches.add(branch);
          }
        }
      }
    } else {
      _valid = false;
    }
  }
}
