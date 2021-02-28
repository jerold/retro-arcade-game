/// Author: Jerold Albertson
/// Contact: jerold.albertson@gmail.com : github.com/jerold
/// Usage: If used, please provide visible attribution.

import 'dart:async';
import 'dart:html';
import 'dart:math';

// used to generate new piece indexes in the queue
final rand = Random();

// board dimensions
const board_y = 24;
const board_x = 10;

// values used to for empty and shadowed pixels
const empty_value = 0;
const shadow_value = -1;
const predict_value = -2;

// rate at which the game progresses
const ms_inc = 50;
var _tick_ms = 400;
var _auto_ms = 150;

// current board and piece index queue where front element is current piece
var _b = emptyBoard();
var _q = freshQueue();

// predicts possible moves and changes in score, can be used to
// automate piece placement.
Possibility _p;

// lines that should be cleaned up
var _tetrisLines = <int>[];
var _score = 0;

// current piece details: index, x, y, and rotation
int get _i => _q.first;
int _y;
int _x;
int _r;

// flag for pausing the game
bool paused = false;

// have the game play itself
bool autopilot = false;

// DOM Element the board is mounted into
Element _boardElement;

void main() {
  document.body.onKeyDown.listen(_onKeyDown);
  _boardElement = querySelector('#tetris');
  _boardElement.innerHtml = boardAsInnerHtml(emptyBoard());
  _start();
}

// updates the DOM to reflect the current game state
void _paint() async {
  var composite = boardCopy(_b);

  // show predictions when possibilities have been generated
  if (_p != null) {
    final predictY = maxValidY(_p.x, _y, _p.r, _i, _b);
    composite = merged(composite, boardCopy(pieceMask(_p.x, predictY, _p.r, _i), mask: predict_value));
  }

  final shadowY = maxValidY(_x, _y, _r, _i, _b);
  composite = merged(composite, boardCopy(pieceMask(_x, shadowY, _r, _i), mask: shadow_value));

  composite = merged(composite, pieceMask(_x, _y, _r, _i));
  final pixels = composite.expand((row) => row).toList();
  final divs = _boardElement.children;
  for (var i = 0; i < divs.length; i++) {
    divs[i].className = 'pixel ${pixelClassName(pixels[i])}';
  }
}

String boardAsInnerHtml(List<List<int>> board) => board.expand((row) => row.map(pixelAsInnerHtml)).join();

String pixelAsInnerHtml(int pixel) => '<div class="pixel ${pixelClassName(pixel)}"></div>';

String pixelClassName(int pixel) {
  switch (pixel) {
    case 0:
      return 'empty';
    case -1:
      return 'shadow';
    case -2:
      return 'predict';
    default:
      return 'piece-${pixel}';
  }
}

// relocates piece transforms to the top of the board following a dequeue
void _resetPieceTransforms() {
  _r = 0;
  _x = initialX(_i);
  _y = initialY(_i);
}

void _start() async {
  _reset();
  if (!paused) {
    _scheduleTick();
  }
}

Timer _tickTimer;
void _scheduleTick() async {
  _tickTimer?.cancel();
  _tickTimer = Timer(Duration(milliseconds: max(20, _tick_ms)), _tick);
}

Timer _autoTimer;
void _scheduleAutopilot() async {
  _autoTimer?.cancel();
  _autoTimer = Timer(Duration(milliseconds: max(20, _auto_ms)), _auto);
}

// clears the board and resets the score
void _reset() {
  _score = 0;
  _b = emptyBoard();
  _q = freshQueue();
  _updatePossibility();
  _resetPieceTransforms();
  _paint();
}

void _auto() async {
  if (_p != null && _tetrisLines.isEmpty) {
    if (_r % 4 != _p.r) {
      _rotatePiece();
    } else if (_x > _p.x) {
      _movePieceLeft();
    } else if (_x < _p.x) {
      _movePieceRight();
    } else {
      _dropPiece();
    }
  }

  _paint();
  _scheduleAutopilot();
}

void _updatePossibility() {
  _p = Possibility.head(_b, _q);
}

// progresses the board state on an interval
void _tick() async {
  _tickTimer?.cancel();
  _squashEmptyTetrisLines();
  if (isValid(_x, _y + 1, _r, _i, _b)) {
    _y++;
  } else {
    _b = boardWithPiece(_x, _y, _r, _i, _b);
    _emptyTetrisLines();
    _dequeue();
    _enqueue();

    final start = DateTime.now();
    _p = Possibility.head(boardWithLinesSquashed(_b, _tetrisLines), _q);
    final time = DateTime.now().difference(start);
    print('Options:${Possibility.branchCount} Best:${_p.score} x:${_p.x} r:${_p.r} ($time)');

    _resetPieceTransforms();
    if (!isValid(_x, _y, _r, _i, _b)) {
      print('Game Over');
      _reset();
    }
    _printScoreAndQueue();
  }

  _paint();
  _scheduleTick();
}

void _printScoreAndQueue() {
  print('${piece_avatars[_q.first]} ${_q.sublist(1).map((p) => piece_avatars[p])} $_score');
}

class Possibility {
  // analytic on how complex the search space was
  static int _branchCount = 0;
  static int get branchCount => _branchCount;
  static int maxDepth = 2;

  // rotation and x values used while Branching to explore game space
  static const rs = [0, 1, 2, 3];
  static const xs = [-2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8];

  // branch represents the result of applying these inputs
  int _ox;
  int get x => _ox;

  int _or;
  int get r => _or;

  bool _valid; // is provided input even valid, if not _result will be null
  bool get valid => _valid;

  int _score; // score change given this move
  int get score => _valid ? _score + _headspace + _branches.fold(0, (childScores, b) => childScores + b.score) : 0;

  int _headspace; // part of the branches fitness function

  List<List<int>> _result;

  final _branches = <Possibility>[];

  // returns a head Possibility if no previous one existed, otherwise try to
  // return one of previous' children representing the game state that was chosen
  factory Possibility.next(List<List<int>> b, List<int> q, Possibility previous) {
    if (previous != null) {
      // TODO: return the branch for the new board (assuming it was a predicted
      // child, update it to be head (change x and r to represent those of the
      // highest scoring child, and have its branches recalculate a new depth
    }
    return Possibility.head(b, q);
  }

  // head returns a score for it's possible children x and r values
  // from its top scoring branch;
  Possibility.head(List<List<int>> b, List<int> q) {
    _branchCount = 0;
    _result = b;
    _score = 0;
    _headspace = headspace(_result);
    
    if (q.isNotEmpty) {
      for (final br in rs) {
        for (final bx in xs) {
          final b = Possibility(bx, br, q, 0, _result);
          if (b.valid) {
            _branches.add(b);
          }
        }
      }
    }
    _valid = _branches.isNotEmpty;
    if (_valid) {
      var _bestBranchIndex = 0;
      var _bestBranchScore = 0;
      for (var i = 0; i < _branches.length; i++) {
        final branchScore = _branches[i].score;
        if (branchScore > _bestBranchScore) {
          _bestBranchIndex = i;
          _bestBranchScore = branchScore;
        }
      }
      _or = _branches[_bestBranchIndex].r;
      _ox = _branches[_bestBranchIndex].x;
    }
  }

  Possibility(this._ox, this._or, List<int> q, int depth, List<List<int>> b) {
    _branchCount++;
    if (q.isNotEmpty && depth < q.length && isValid(_ox, 0, _or, q[depth], b)) {
      final i = q[depth];
      _valid = true;
      final y = maxValidY(_ox, 0, _or, i, b);
      _result = boardWithPiece(_ox, y, _or, i, b);
      final l = scoringLines(_result);
      _score = scoreForLines(l.length);
      _result = boardWithLinesSquashed(_result, l);
      _headspace = headspace(_result);

      if (q.length > depth + 1 && depth + 1 < maxDepth) {
        for (final br in rs) {
          for (final bx in xs) {
            final b = Possibility(bx, br, q, depth+1, _result);
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

// empty out rows that have no empty pixels and update score
void _emptyTetrisLines() {
  _tetrisLines = scoringLines(_b);
  if (_tetrisLines.isNotEmpty) {
    _b = boardWithLinesEmptied(_b, _tetrisLines);
    _score = _score + scoreForLines(_tetrisLines.length);
  }
}

// any emptied lines are removed and lines above them shift down
void _squashEmptyTetrisLines() {
  if (_tetrisLines.isNotEmpty) {
    _b = boardWithLinesSquashed(_b, _tetrisLines);
    _tetrisLines.clear();
  }
}

// maps the score fore completing the given number of lines
int scoreForLines(int lineCount) {
  switch (lineCount) {
    case 1:
      return 40;
    case 2:
      return 100;
    case 3:
      return 300;
    case 4:
      return 1200;
  }
  return 0;
}

// add a piece index to the end of the queue
void _enqueue() {
  _q.add(rand.nextInt(pieces.length));
}

// remove a piece index from the front of the queue
void _dequeue() {
  _q.removeAt(0);
}

List<int> freshQueue() => List<int>.generate(4, (_) => rand.nextInt(pieces.length));

// process user inputs
void _onKeyDown(KeyboardEvent e) {
  switch (e.keyCode) {
    case KeyCode.ESC:
      _reset();
      break;
    case KeyCode.ENTER:
    case KeyCode.SPACE:
      _dropPiece();
      break;
    case KeyCode.UP:
      _rotatePiece();
      break;
    case KeyCode.LEFT:
      _movePieceLeft();
      break;
    case KeyCode.RIGHT:
      _movePieceRight();
      break;
    case KeyCode.DOWN:
      _movePieceDown();
      break;
    case KeyCode.P:
      _togglePause();
      break;
    case KeyCode.A:
      _toggleAutopilot();
      break;
    case KeyCode.NUM_PLUS:
    case KeyCode.EQUALS: // plus
      _changeSpeed(-ms_inc);
      break;
    case KeyCode.NUM_MINUS:
    case KeyCode.DASH: // minus
      _changeSpeed(ms_inc);
      break;
    default:
  }
  _paint();
}

void _togglePause() {
  if (paused) {
    _scheduleTick();
  } else {
    _tickTimer?.cancel();
  }
  paused = !paused;
}

void _toggleAutopilot() {
  if (autopilot) {
    _scheduleAutopilot();
  } else {
    _autoTimer?.cancel();
  }
  autopilot = !autopilot;
}

// change the rate a piece falls
void _changeSpeed(int ms) {
  _tick_ms = _tick_ms + ms;
  _auto_ms = _auto_ms + ms;
  print('Speed set to tick:${_tick_ms}ms auto:${_auto_ms}ms');
}

// current piece is shifted down as far as it can go, and locked in
void _dropPiece() {
  _y = maxValidY(_x, _y, _r, _i, _b);
  _tick();
}

// rotation might require shifting away from walls or obstacles
void _rotatePiece() {
  if (isValid(_x, _y, _r + 1, _i, _b)) {
    _r++;
  } else {
    if (isValid(_x, _y + 1, _r + 1, _i, _b)) {
      _r++;
      _y++;
    } else if (isValid(_x - 1, _y, _r + 1, _i, _b)) {
      _r++;
      _x--;
    } else if (isValid(_x + 1, _y, _r + 1, _i, _b)) {
      _r++;
      _x++;
    } else {
      if (isValid(_x - 2, _y, _r + 1, _i, _b)) {
        _r++;
        _x -= 2;
      } else if (isValid(_x + 2, _y, _r + 1, _i, _b)) {
        _r++;
        _x += 2;
      }
    }
  }
}

// transforms current piece left on the board if possible
void _movePieceLeft() {
  if (isValid(_x - 1, _y, _r, _i, _b)) {
    _x--;
    print('x:$_x');
  }
}

// transforms current piece right on the board if possible
void _movePieceRight() {
  if (isValid(_x + 1, _y, _r, _i, _b)) {
    _x++;
    print('x:$_x');
  }
}

// transforms current piece down on the board if possible
void _movePieceDown() {
  if (isValid(_x, _y + 1, _r, _i, _b)) {
    _y++;
  }
}

// assuming the board is valid with the piece at a given x find
// how far the piece can be dropped while still being valid
int maxValidY(int x, int y, int r, int i, List<List<int>> b) {
  var dy = 0;
  while (isValid(x, y + dy + 1, r, i, b)) {
    dy++;
  }
  return y + dy;
}

// counts the consecutive empty rows from the top of the board
int headspace(List<List<int>> b) {
  var r = 0;
  for (var y = 0; y < board_y; y++) {
    for (var x = 0; x < board_x; x++) {
      if (!pixelIsEmpty(x, y, b)) {
        return r;
      }
    }
    r++;
  }
  return r;
}

// true if a piece is 100% on the board and doesn't intersect non-empty board pixels
bool isValid(int x, int y, int r, int i, List<List<int>> b) {
  final p = rotatedPiece(r, i);
  for (var py = 0; py < p.length; py++) {
    for (var px = 0; px < p[py].length; px++) {
      // board coord of this pixel of the piece
      final bx = px + x;
      final by = py + y;
      if (!pixelIsEmpty(px, py, p)) {
        if (!xOnBoard(bx) || !yOnBoard(by)) {
          // all pixels from the piece must be within the board
          return false;
        } else if (!pixelIsEmpty(bx, by, b)) {
          // piece must not collide with non-empty pixels on the board
          return false;
        }
      }
    }
  }
  return true;
}

bool pixelIsEmpty(int x, int y, List<List<int>> m) => m[y][x] == 0;

bool yOnBoard(int y) => y >= 0 && y < board_y;

bool xOnBoard(int x) => x >= 0 && x < board_x;

// returns the row indexes that are complete and can be removed;
List<int> scoringLines(List<List<int>> b) {
  final l = <int>[];
  for (var y = 0; y < board_y; y++) {
    var clearLine = true;
    for (var x = 0; x < board_x; x++) {
      if (pixelIsEmpty(x, y, b)) {
        clearLine = false;
      }
    }
    if (clearLine) {
      l.add(y);
    }
  }
  return l;
}

// returns a copy of the board with pixels in given lines set to empty_value
List<List<int>> boardWithLinesEmptied(List<List<int>> b, List<int> l) {
  final n = boardCopy(b);
  for (var y = l.length - 1; y >= 0; y--) {
    for (var x = 0; x < board_x; x++) {
      n[l[y]][x] = empty_value;
    }
  }
  return n;
}

// returns a copy of the board with given lines squashed (replaced from above)
List<List<int>> boardWithLinesSquashed(List<List<int>> b, List<int> l) {
  final n = boardCopy(b);
  for (var y = l.length - 1; y >= 0; y--) {
    n.removeAt(l[y]);
  }
  for (final _ in l) {
    n.insert(0, List<int>.filled(board_x, empty_value));
  }
  return n;
}

// returns a copy of b1 with non-empty pixels from b2 added to it
List<List<int>> merged(List<List<int>> b1, List<List<int>> b2) {
  final b = <List<int>>[];
  for (var y = 0; y < board_y; y++) {
    b.add(<int>[]);
    for (var x = 0; x < board_x; x++) {
      b[y].add(!pixelIsEmpty(x, y, b2) ? b2[y][x] : b1[y][x]);
    }
  }
  return b;
}

// returns a board sized 2d array with a piece's pixels set within it
List<List<int>> pieceMask(int x, int y, int r, int i) => boardWithPiece(x, y, r, i, emptyBoard());

// returns a copy of the given board with a piece's pixels added
List<List<int>> boardWithPiece(int x, int y, int r, int i, List<List<int>> b) {
  final n = boardCopy(b);
  final p = rotatedPiece(r, i);
  for (var py = 0; py < p.length; py++) {
    for (var px = 0; px < p[py].length; px++) {
      // board coord of this piece pixel
      final by = py + y;
      final bx = px + x;
      if (!pixelIsEmpty(px, py, p) && xOnBoard(bx) && yOnBoard(by)) {
        n[by][bx] = p[py][px];
      }
    }
  }
  return n;
}

List<List<int>> emptyBoard() {
  final b = <List<int>>[];
  for (var y = 0; y < board_y; y++) {
    b.add(List<int>.filled(board_x, empty_value));
  }
  return b;
}

// returns a board sized 2d array identical to the one provided, all non-empty
// pixels will be replaced with the mask if given
List<List<int>> boardCopy(List<List<int>> b, {int mask}) {
  final n = <List<int>>[];
  for (var y = 0; y < board_y; y++) {
    n.add(<int>[]);
    for (var x = 0; x < board_x; x++) {
      if (pixelIsEmpty(x, y, b)) {
        n[y].add(empty_value);
      } else {
        n[y].add(mask ?? b[y][x]);
      }
    }
  }
  return n;
}

// pretty print a 2d array to the console
void printArray(List<List<int>> a, {String label}) {
  print('------------ ${label ?? ""}');
  if ( a[0].length <= 10) {
    var xAxis = '';
    for (var x = 0; x < a[0].length; x++) {
      xAxis += ' $x ';
    }
    print(xAxis);
  }
  for (var y = 0; y < a.length; y++) {
    var line = '';
    for (var x = 0; x < a[y].length; x++) {
      line += '${pixelIsEmpty(x, y, a) ? "[ ]" : "[x]"}';
    }
    print('$line $y');
  }
}

// returns a 2d array representing a piece rotated clockwise r times
List<List<int>> rotatedPiece(int r, int i) {
  var piece = pieces[i];
  for (var i = 0; i < r; i++) {
    piece = rotateCW(piece);
  }
  return piece;
}

// rotates the given 2d array 90 degrees clockwise
List<List<int>> rotateCW(List<List<int>> piece) {
  final len = piece.length; // all pieces are square
  final rotation = <List<int>>[];
  for (var y = 0; y < len; y++) {
    rotation.add(<int>[]);
    for (var x = 0; x < len; x++) {
      rotation[y].add(piece[len - 1 - x][y]);
    }
  }
  return rotation;
}

// returns the starting x for a specific piece index
int initialX(int pieceIndex) {
  switch (pieceIndex) {
    case 0:
      return 4;
    default:
      return 3;
  }
}

// returns the starting y for a specific piece index
int initialY(int pieceIndex) {
  switch (pieceIndex) {
    case 1:
    case 2:
    case 3:
    case 6:
      return -1;
    default:
      return 0;
  }
}

// used when printing the queue to the console
final piece_avatars = <String>[
  '⠶',
  '⠒⠒',
  '⠴⠂',
  '⠲⠄',
  '⠧',
  '⠼',
  '⠲⠂',
];

// list of 2d arrays encoding each pieces' shape and color
final pieces = <List<List<int>>>[
  [
    [1, 1],
    [1, 1]
  ],
  [
    [0, 0, 0, 0],
    [2, 2, 2, 2],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ],
  [
    [0, 0, 0],
    [0, 3, 3],
    [3, 3, 0]
  ],
  [
    [0, 0, 0],
    [4, 4, 0],
    [0, 4, 4]
  ],
  [
    [0, 5, 0],
    [0, 5, 0],
    [0, 5, 5]
  ],
  [
    [0, 6, 0],
    [0, 6, 0],
    [6, 6, 0]
  ],
  [
    [0, 0, 0],
    [7, 7, 7],
    [0, 7, 0]
  ],
];
