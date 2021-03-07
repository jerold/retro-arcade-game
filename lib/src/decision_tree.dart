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
      for (final br in rs) {
        for (final bx in xs) {
          final b = DecisionTree(bx, br, q, 0, maxDepth, _result);
          if (b.valid) {
            _branches.add(b);
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
        for (final br in rs) {
          for (final bx in xs) {
            final b = DecisionTree(bx, br, q, depth + 1, maxDepth, _result);
            if (b.valid) {
              _branches.add(b);
            }
          }
        }
      }
    } else {
      _valid = false;
    }
  }
}
