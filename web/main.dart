import 'dart:async';
import 'dart:html';
import 'dart:math';

const board_y = 24; // standard board height
const board_x = 10; // standard board width
final rand = Random();

const tick_ms = 400;
const empty_value = 0;
const shadow_value = -1; // 0 is empty, 1-7 for a piece, and -1 for shadow

var _b = emptyBoard();
var _q = <int>[];

// lines that should be cleaned up
var _tetrisLines = <int>[];

int get _i => _q.first;
int _y;
int _x;
int _r;

bool paused = false;

Element _boardElement;

void main() {
  document.body.onKeyDown.listen(_onKeyDown);
  _boardElement = querySelector('#tetris');
  _start();
}

void _paint() async {
  var dy = 0;
  while (isValid(_x, _y + dy, _r, _i, _b)) {
    dy++;
  }
  var composite = merged(_b, boardCopy(pieceMask(_x, _y + dy - 1, _r, _i), shadow: true));
  composite = merged(composite, pieceMask(_x, _y, _r, _i));
  _boardElement.innerHtml = boardAsInnerHtml(composite);
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

void _resetPieceTransforms() {
  _r = 0;
  _x = initialX(_i);
  _y = initialY(_i);
}

void _start() async {
  _addPieceToQueue();
  _addPieceToQueue();
  _addPieceToQueue();
  _addPieceToQueue();
  _resetPieceTransforms();

  _paint();
  _scheduleTick();
}

Timer _tickTimer;
void _scheduleTick() async {
  _tickTimer = Timer(Duration(milliseconds: tick_ms), _tick);
}

void _reset() {
  _b = emptyBoard();
}

void _tick() async {
  _tickTimer?.cancel();
  _cleanUpFormerTetrisLines();
  if (isValid(_x, _y + 1, _r, _i, _b)) {
    _y++;
  } else {
    _b = boardWithPiece(_x, _y, _r, _i, _b);
    _removeTetrisLines();
    _popPieceFromQueue();
    _addPieceToQueue();
    _resetPieceTransforms();
    if (!isValid(_x, _y, _r, _i, _b)) {
      _b = emptyBoard();
      print('JJA Game Reset!');
    }
    print(_q.map((p) => piece_avatars[p]));
  }

  _paint();
  _scheduleTick();
}

void _cleanUpFormerTetrisLines() {
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

void _removeTetrisLines() {
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
}

void _addPieceToQueue() {
  _q.add(rand.nextInt(pieces.length));
}

void _popPieceFromQueue() {
  _q.removeAt(0);
}

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

void _dropPiece() {
  var dy = 0;
  while (isValid(_x, _y + dy, _r, _i, _b)) {
    dy++;
  }
  _y = _y + dy - 1;
  _tick();
}

// rotation might require shifting away from walls or obsticles
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

void _movePieceLeft() {
  if (isValid(_x - 1, _y, _r, _i, _b)) {
    _x--;
  }
}

void _movePieceRight() {
  if (isValid(_x + 1, _y, _r, _i, _b)) {
    _x++;
  }
}

void _movePieceDown() {
  if (isValid(_x, _y + 1, _r, _i, _b)) {
    _y++;
  }
}

bool isValid(int x, int y, int r, int i, List<List<int>> b) =>
    !collision(pieceMask(x, y, r, i), b) && pieceIsWithinBoard(x, y, r, i);

bool collision(List<List<int>> m, List<List<int>> b) {
  for (var y = 0; y < board_y; y++) {
    for (var x = 0; x < board_x; x++) {
      if (!pixelIsEmpty(x, y, m) && !pixelIsEmpty(x, y, b)) {
        return true;
      }
    }
  }
  return false;
}

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

// a copy of b1 with non-empty pixels from b2 added to it
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

List<List<int>> pieceMask(int x, int y, int r, int i) => boardWithPiece(x, y, r, i, emptyBoard());

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

// use replace to 
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

void printMatrix(List<List<int>> matrix, {String label}) {
  print('------------ ${label ?? ""}');
  for (var y = 0; y < matrix.length; y++) {
    var line = '';
    for (var x = 0; x < matrix[y].length; x++) {
      line += '${matrix[y][x]}';
    }
    print(line);
  }
}

List<List<int>> rotatedPiece(int r, int i) {
  var piece = pieces[i];
  for (var i = 0; i < r; i++) {
    piece = rotateCW(piece);
  }
  return piece;
}

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

int initialX(int pieceIndex) {
  switch (pieceIndex) {
    case 0:
      return 4;
    default:
      return 3;
  }
}

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

final piece_avatars = <String>[
  '⠶',
  '⠒⠒',
  '⠴⠂',
  '⠲⠄',
  '⠧',
  '⠼',
  '⠲⠂',
];

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
