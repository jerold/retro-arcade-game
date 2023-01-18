import 'dart:async';
import 'dart:math';

import 'package:retro_arcade_game/arcade_game.dart';
// import 'package:retro_arcade_game/src/game_input_controller.dart';
import 'package:retro_arcade_game/src/game_renderer.dart';
// import 'package:retro_arcade_game/src/util.dart';

class Game {
  // flag for pausing the game
  bool _paused = false;

  // time in ms between regular game updates
  var _tick_interval_ms = default_game_tick_ms;

  // current board and piece index queue where front element is current piece
  var _b = emptyBoard();
  var _q = freshQueue();

  // lines that should be cleaned up
  var _lineClears = <int>[];
  var _score = 0;
  int get score => _score;

  // highest score across all games played with this instance
  var _highScore = 0;
  int get highScore => _highScore;

  // number of games played
  var _plays = 0;
  int get plays => _plays;

  // current piece details: index, x, y, and rotation
  int get _i => _q.first;
  int _y;
  int _x;
  int _r;

  // Handles all the rendering details for the Game
  GameRenderer _renderer;

  // Provides User or AI input to be applied to the game.
  GameInputController _controller;

  Game({GameInputController controller, GameRenderer renderer}) {
    _controller = controller ?? DecisionTreeInput();
    _controller.inputStream.listen(_handleInput);
    if (_controller is Immediate) {
      // ticking on a timed interval won't be required
      (_controller as Immediate).moveStream.listen(_handleMove);
      _paused = true;
    }

    _renderer = renderer ?? NoopRenderer();
    _renderer.initializeBoard(_b);
  }

  void start() {
    _reset();
    _controller.gameStarted();
    if (!_paused) {
      _scheduleTick();
    }
  }

  // relocates piece transforms to the top of the board following a dequeue
  void _resetPieceTransforms() {
    _r = 0;
    _x = initialX(_i);
    _y = initialY(_i);
  }

  // clear the board, score, queue, and ai
  void _reset() {
    _plays++;
    _highScore = max(_score, _highScore);
    _score = 0;
    _b = emptyBoard();
    _q = freshQueue();
    _lineClears.clear();
    // fire a board update to let the AI know what the initial board state is
    _resetPieceTransforms();
    _controller.changeBoard(_b, _q);

    _paint();
    _scheduleTick();
  }

  void _paint() => _renderer.paint(_x, _y, _r, _i, _b, _q, _lineClears, _score, _highScore, _controller);

  Timer _tickTimer;
  void _scheduleTick() {
    if (!_paused) {
      _tickTimer?.cancel();
      _tickTimer = Timer(Duration(milliseconds: max(min_tick_ms, _tick_interval_ms)), _tick);
    }
  }

  // progresses the board state on an interval
  void _tick() {
    _tickTimer?.cancel();
    _squashLineClears();
    if (isValid(_x, _y + 1, _r, _i, _b)) {
      _y++;
    } else {
      _b = boardWithPiece(_x, _y, _r, _i, _b);
      _updateScore();
      _dequeue();
      _enqueue();
      _resetPieceTransforms();
      _controller.changeBoard(boardWithLinesSquashed(_b, _lineClears), _q);
      if (!isValid(_x, _y, _r, _i, _b)) {
        print('Game Ended! Final Score:$_score');
        _controller.gameEnded();
        _reset();
        return;
      }
    }

    _paint();
    _scheduleTick();
  }

  // empty out rows that have no empty pixels and update score
  void _updateScore() {
    _lineClears = lineClears(_b);
    if (_lineClears.isNotEmpty) {
      _score = _score + scoreForLines(_lineClears.length);
    }
  }

  // any emptied lines are removed and lines above them shift down
  void _squashLineClears() {
    if (_lineClears.isNotEmpty) {
      _b = boardWithLinesSquashed(_b, _lineClears);
      _lineClears.clear();
    }
  }

  // add a piece index to the end of the queue
  void _enqueue() {
    _q.add(pieceIndexFromBag());
  }

  // remove a piece index from the front of the queue
  void _dequeue() {
    _q.removeAt(0);
  }

  void _handleInput(GameInput input) {
    switch (input) {
      case GameInput.reset:
        _reset();
        break;
      case GameInput.dropPiece:
        _dropPiece();
        break;
      case GameInput.rotatePiece:
        _rotatePiece();
        break;
      case GameInput.movePieceLeft:
        _movePieceLeft();
        break;
      case GameInput.movePieceRight:
        _movePieceRight();
        break;
      case GameInput.movePieceDown:
        _movePieceDown();
        break;
      case GameInput.togglePause:
        _togglePause();
        break;
      case GameInput.increaseSpeed:
        _changeSpeed(-ms_inc);
        break;
      case GameInput.decreaseSpeed:
        _changeSpeed(ms_inc);
        break;
    }
    _paint();
  }

  // move represents final intended x and r for piece, apply and follow with a tick.
  void _handleMove(PieceMove move) {
    _x = move.x;
    _r = move.r;
    _dropPiece();
  }

  void _togglePause() {
    _paused = !_paused;
    if (_paused) {
      _tickTimer?.cancel();
    } else {
      _scheduleTick();
    }
    _controller.setPaused(_paused);
    print(_paused ? 'Paused' : 'Unpaused');
  }

  // change the rate a piece falls
  void _changeSpeed(int deltaMs) {
    _tick_interval_ms += deltaMs;
    _controller.changeSpeed(deltaMs);
    print('Speed set to tick:${_tick_interval_ms}ms');
  }

  // current piece is shifted down as far as it can go, and locked in
  void _dropPiece() {
    // an unsquashed line could cause a maxY to be invalidated at the top of a tick (when all lines shift down opening up space)
    _squashLineClears();
    _y = maxValidY(_x, _y, _r, _i, _b);
    _controller.changePiece(_x, _y, _r);
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
    _controller.changePiece(_x, _y, _r);
  }

  // transforms current piece left on the board if possible
  void _movePieceLeft() {
    if (isValid(_x - 1, _y, _r, _i, _b)) {
      _x--;
      _controller.changePiece(_x, _y, _r);
    }
  }

  // transforms current piece right on the board if possible
  void _movePieceRight() {
    if (isValid(_x + 1, _y, _r, _i, _b)) {
      _x++;
      _controller.changePiece(_x, _y, _r);
    }
  }

  // transforms current piece down on the board if possible
  void _movePieceDown() {
    if (isValid(_x, _y + 1, _r, _i, _b)) {
      _y++;
      _controller.changePiece(_x, _y, _r);
    }
  }
}
