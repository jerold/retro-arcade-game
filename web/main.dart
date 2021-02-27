import 'dart:async';
import 'dart:html';
import 'dart:math';

const board_y = 24; // standard board height
const board_x = 10; // standard board width
final rand = Random();

var _b = filledBoard(0);
var _q = <int>[];

int get _i => _q.first;
int _y;
int _x;
int _r;

Element _backgroundElement;
Element _boardElement;
Element _maskElement;

void main() {
  document.body.onKeyDown.listen(_onKeyDown);

  _backgroundElement = querySelector('#background');
  _boardElement = querySelector('#tetris');
  _maskElement = querySelector('#mask');
  _setBackground();

  _start();
}

void _setBackground() async {
  _backgroundElement.innerHtml = boardAsInnerHtml(_b);
}

void _paint() async {
  _boardElement.innerHtml = boardAsInnerHtml(_b);

  final mask = pieceMask(_x, _y, _r, _i);
  _maskElement.innerHtml = boardAsInnerHtml(mask);
}

String boardAsInnerHtml(List<List<int>> board) => board.expand((row) => row.map(pixelAsInnerHtml)).join();

String pixelAsInnerHtml(int pixel) => '<div class="pixel shape-$pixel"></div>';

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
  _tickTimer = Timer(Duration(milliseconds: 500), _tick);
}

void _reset() {
  _b = filledBoard(0);
}

void _tick() async {
  _tickTimer?.cancel();
  if (isValid(_x, _y + 1, _r, _i, _b)) {
    _y++;
  } else {
    _b = boardWithPiece(_x, _y, _r, _i, _b);
    _popPieceFromQueue();
    _addPieceToQueue();
    _resetPieceTransforms();
    if (!isValid(_x, _y, _r, _i, _b)) {
      _b = filledBoard(0);
      print('JJA Game Reset!');
    }
    print(_q.map((p) => piece_avatars[p]));
  }

  _paint();
  _scheduleTick();
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
    default:
  }
  _paint();
}

void _dropPiece() {
  var dy = 1;
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

List<List<int>> pieceMask(int x, int y, int r, int i) => boardWithPiece(x, y, r, i, filledBoard(0));

List<List<int>> boardWithPiece(int x, int y, int r, int i, List<List<int>> b) {
  final n = boardCopy(b);
  final p = rotatedPiece(r, i);
  for (var py = 0; py < p.length; py++) {
    for (var px = 0; px < p[py].length; px++) {
      // board coord of this piece pixel
      final by = py + y;
      final bx = px + x;
      if (!pixelIsEmpty(px, py, p) && xOnBoard(bx) && yOnBoard(by)) {
        n[by][bx] = 1;
      }
    }
  }
  return n;
}

List<List<int>> filledBoard(int value) {
  final b = <List<int>>[];
  for (var y = 0; y < board_y; y++) {
    b.add(<int>[]);
    for (var x = 0; x < board_x; x++) {
      b[y].add(value);
    }
  }
  return b;
}

List<List<int>> boardCopy(List<List<int>> b) {
  final n = <List<int>>[];
  for (var y = 0; y < board_y; y++) {
    n.add(<int>[]);
    for (var x = 0; x < board_x; x++) {
      n[y].add(b[y][x]);
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
    [1, 1, 1, 1],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ],
  [
    [0, 0, 0],
    [0, 1, 1],
    [1, 1, 0]
  ],
  [
    [0, 0, 0],
    [1, 1, 0],
    [0, 1, 1]
  ],
  [
    [0, 1, 0],
    [0, 1, 0],
    [0, 1, 1]
  ],
  [
    [0, 1, 0],
    [0, 1, 0],
    [1, 1, 0]
  ],
  [
    [0, 0, 0],
    [1, 1, 1],
    [0, 1, 0]
  ],
];
