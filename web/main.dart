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

// rate at which the game progresses
const tick_ms_inc = 100;
var _tick_ms = 400;

// current board and piece index queue where front element is current piece
var _b = emptyBoard();
var _q = freshQueue();

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
  var dy = 0;
  while (isValid(_x, _y + dy, _r, _i, _b)) {
    dy++;
  }
  var composite = merged(_b, boardCopy(pieceMask(_x, _y + dy - 1, _r, _i), shadow: true));
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
  switch(pixel) {
    case 0:
      return 'empty';
    case -1:
      return 'shadow';
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
  _resetPieceTransforms();
  _printScoreAndQueue();

  _paint();
  if (!paused) {
    _scheduleTick();
  }
}

Timer _tickTimer;
void _scheduleTick() async {
  _tickTimer = Timer(Duration(milliseconds: _tick_ms), _tick);
}

// clears the board and resets the score
void _reset() {
  _score = 0;
  _b = emptyBoard();
  _q = freshQueue();
  _resetPieceTransforms();
  _paint();
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

// empty out rows that have no empty pixels and update score
void _emptyTetrisLines() {
  for (var y = 0; y < board_y; y++) {
    var clearLine = true;
    for (var x = 0; x < board_x; x++) {
      if (pixelIsEmpty(x, y, _b)) {
        clearLine = false;
      }
    }
    if (clearLine) {
      _tetrisLines.add(y);
      for (var x = 0; x < board_x; x++) {
        _b[y][x] = empty_value;
      }
    }
  }
  _updateScore(_tetrisLines.length);
}

// any emptied lines are removed and lines above them shift down
void _squashEmptyTetrisLines() {
  if (_tetrisLines.isNotEmpty) {
    for (var y = _tetrisLines.length - 1; y >= 0; y--) {
      _b.removeAt(_tetrisLines[y]);
    }
    for (final _ in _tetrisLines) {
      _b.insert(0, List<int>.filled(board_x, empty_value));
    }
    _tetrisLines.clear();
  }
}

// updates score depending on how many lines were cleared
void _updateScore(int linesRemoved) {
  switch(linesRemoved) {
    case 1:
      _score += 40;
      return;
    case 2:
      _score += 100;
      return;
    case 3:
      _score += 300;
      return;
    case 4:
      _score += 1200;
      return;
  }
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
    case KeyCode.NUM_PLUS:
    case KeyCode.EQUALS: // plus
      _changeSpeed(-tick_ms_inc);
      break;
    case KeyCode.NUM_MINUS:
    case KeyCode.DASH: // minus
      _changeSpeed(tick_ms_inc);
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

// change the rate a piece falls
void _changeSpeed(int ms) {
  _tick_ms = max(0, _tick_ms + ms);
  print('Speed set to ${_tick_ms}ms');
}

// current piece is shifted down as far as it can go, and locked in
void _dropPiece() {
  var dy = 0;
  while (isValid(_x, _y + dy, _r, _i, _b)) {
    dy++;
  }
  _y = _y + dy - 1;
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
  }
}

// transforms current piece right on the board if possible
void _movePieceRight() {
  if (isValid(_x + 1, _y, _r, _i, _b)) {
    _x++;
  }
}

// transforms current piece down on the board if possible
void _movePieceDown() {
  if (isValid(_x, _y + 1, _r, _i, _b)) {
    _y++;
  }
}

// checks for for collisions with locked in pixels and board boundary
bool isValid(int x, int y, int r, int i, List<List<int>> b) =>
    !collision(pieceMask(x, y, r, i), b) && pieceIsWithinBoard(x, y, r, i);

// collisions exist if the same pixel is not-empty in both boards
bool collision(List<List<int>> b1, List<List<int>> b2) {
  for (var y = 0; y < board_y; y++) {
    for (var x = 0; x < board_x; x++) {
      if (!pixelIsEmpty(x, y, b1) && !pixelIsEmpty(x, y, b2)) {
        return true;
      }
    }
  }
  return false;
}

// all non-empty piece pixels must be within the board boundary
bool pieceIsWithinBoard(int x, int y, int r, int i) {
  final p = rotatedPiece(r, i);
  for (var py = 0; py < p.length; py++) {
    for (var px = 0; px < p[py].length; px++) {
      // board coord of this piece pixel
      final bx = px + x;
      final by = py + y;
      if (!pixelIsEmpty(px, py, p) && (!xOnBoard(bx) || !yOnBoard(by))) {
        return false;
      }
    }
  }
  return true;
}

bool pixelIsEmpty(int x, int y, List<List<int>> m) => m[y][x] == 0;

bool yOnBoard(int y) => y >= 0 && y < board_y;

bool xOnBoard(int x) => x >= 0 && x < board_x;

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
// pixels will be replaced with the shadow_value if shadow param is given
List<List<int>> boardCopy(List<List<int>> b, {bool shadow = false}) {
  final n = <List<int>>[];
  for (var y = 0; y < board_y; y++) {
    n.add(<int>[]);
    for (var x = 0; x < board_x; x++) {
      if (pixelIsEmpty(x, y, b)) {
        n[y].add(empty_value);
      } else {
        n[y].add(shadow ? shadow_value : b[y][x]);
      }
    }
  }
  return n;
}

// pretty print a 2d array to the console
void printArray(List<List<int>> a, {String label}) {
  print('------------ ${label ?? ""}');
  for (var y = 0; y < a.length; y++) {
    var line = '';
    for (var x = 0; x < a[y].length; x++) {
      line += '${a[y][x]}';
    }
    print(line);
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
