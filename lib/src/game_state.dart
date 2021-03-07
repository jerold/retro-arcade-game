import 'dart:math';

import 'package:retro_arcade_game/src/util.dart';

class GameState {
  List<List<int>> _board;

  List<int> _queue;

  int _x;
  int _y;
  int _r;

  GameState(List<List<int>> board, List<int> queue) {
    _board = board ?? emptyBoard();
    _queue = queue ?? freshQueue();

    _x = initialX(i);
    _y = initialY(i);
    _r = 0;
  }

  void updatePiece(int x, int y, int r) {
    _x = x;
    _y = y;
    _r = r;
  }

  // 2D array representing empty and non-empty board pixels
  List<List<int>> get board => boardCopy(_board);

  // queue of upcoming pieces (0 is currently in play)
  List<int> get queue => <int>[..._queue];

  // current piece index in the pieces list
  int get i => _queue.first;

  // current piece's x offset accross the board
  int get x => _x;

  // current piece's y offset down the board
  int get y => _y;

  // number of times the current piece's shape matrix has been rotated CW
  int get r => _r;

  @override
  String toString() {
    final outVal = [
      rOut,
      xOut,
    ].expand((e) => e).join(', ');
    final inVal = bOut.join(', ');
    return '[$i, $outVal, $inVal],';
  }

  /// an array of 0, 1, with 1 in the position for the selected r value in rs
  List<int> get rOut => List<int>.generate(rs.length, (index) => r == index ? 1 : 0);

  /// an array of 0, 1, with 1 in the position for the selected x value in xs
  List<int> get xOut => List<int>.generate(xs.length, (index) => x == index ? 1 : 0);

  /// and array of 0, 1, with 1 in the position for the selected i value in pieces
  List<int> get iOut => List<int>.generate(pieces.length, (index) => i == index ? 1 : 0);

  /// the columns of the board normalized between 0 and 1, step between pixels is consistent, 0 shifted to lowest empty pixel
  List<num> get bOut {
    final out = <num>[];
    var minY = board_y;
    for (var x = 0; x < board_x; x++) {
      var columnAdded = false;
      for (var y = 0; y < board_y; y++) {
        if (!pixelIsEmpty(x, y, _board)) {
          final yFromBottom = board_y - y;
          minY = min(minY, yFromBottom);
          out.add(yFromBottom);
          columnAdded = true;
          break;
        }
      }
      if (!columnAdded) {
        minY = 0;
        out.add(0);
      }
    }

    for (var x = 0; x < board_x; x++) {
      out[x] -= minY;
      out[x] = out[x];
    }
    return out;
  }
}
