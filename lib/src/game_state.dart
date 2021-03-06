import 'dart:async';

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
}
