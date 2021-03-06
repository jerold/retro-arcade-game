import 'dart:async';
import 'dart:html';

import 'package:retro_arcade_game/src/decision_tree.dart';
import 'package:retro_arcade_game/src/util.dart';
import 'package:retro_arcade_game/src/game_state.dart';

const Map<int, GameInput> player_one_bindings = {
  // Game Setting controls
  KeyCode.ESC: GameInput.reset,
  KeyCode.P: GameInput.togglePause,
  KeyCode.NUM_PLUS: GameInput.increaseSpeed,
  KeyCode.EQUALS: GameInput.increaseSpeed,
  KeyCode.NUM_MINUS: GameInput.decreaseSpeed,
  KeyCode.DASH: GameInput.decreaseSpeed,
  // Player 2 piece controls
  KeyCode.SPACE: GameInput.dropPiece,
  KeyCode.W: GameInput.rotatePiece,
  KeyCode.A: GameInput.movePieceLeft,
  KeyCode.D: GameInput.movePieceRight,
  KeyCode.S: GameInput.movePieceDown,
};

const Map<int, GameInput> player_two_bindings = {
  // Player 2 piece controls
  KeyCode.ENTER: GameInput.dropPiece,
  KeyCode.UP: GameInput.rotatePiece,
  KeyCode.LEFT: GameInput.movePieceLeft,
  KeyCode.RIGHT: GameInput.movePieceRight,
  KeyCode.DOWN: GameInput.movePieceDown,
};

abstract class GameInputController {
  final StreamController<GameInput> _controller = StreamController<GameInput>.broadcast();

  Stream<GameInput> get stream => _controller.stream;

  bool _isPaused = false;

  int _tickIntervalMs = default_auto_tick_ms;

  void pausedChange(bool isPaused) {
    _isPaused = isPaused;
    handlePausedChanged(isPaused);
  }

  void speedChange(int deltaMs) {
    _tickIntervalMs += deltaMs;
    print('Speed set to tick:${_tickIntervalMs}ms');
  }

  void press(GameInput input) => _controller.add(input);

  void handlePausedChanged(bool isPaused) {}

  // assumes piece is reset to defaults when the board changes
  void boardChanged(List<List<int>> board, List<int> queue, int clears) {}

  // between board updates the piece is moved around until it locks
  void pieceChanged(int x, int y, int r) {}
}

// binds user key presses to specific game controls
class UserInput extends GameInputController {
  final Map<int, GameInput> _bindings;

  UserInput(this._bindings) {
    document.body.onKeyDown.listen(_onKeyDown);
  }

  factory UserInput.playerOne() => UserInput(player_one_bindings);

  factory UserInput.playerTwo() => UserInput(player_two_bindings);

  void _onKeyDown(KeyboardEvent e) {
    if (_bindings.containsKey(e.keyCode)) {
      press(_bindings[e.keyCode]);
    }
  }
}

// used to let the game know it's controller has plans
class PlanningSomething {
  int x;

  int r;
}

// hooks an ai up to a board and translates the AI's output to game controls
class DecisionTreeInput extends GameInputController with PlanningSomething {
  GameState _state;
  DecisionTree _tree;

  Timer _tickTimer;
  int _animationFrame;

  DecisionTreeInput() {
    _scheduleTick();
  }

  @override
  int get x => _tree.x;

  @override
  int get r => _tree.r;

  @override
  void handlePausedChanged(bool isPaused) {
    if (isPaused) {
      _cancelTick();
    } else {
      _scheduleTick();
    }
  }

  @override
  void boardChanged(List<List<int>> board, List<int> queue, int clears) {
    _state = GameState(board, queue);
    _tree = DecisionTree.head(board, queue);
  }

  @override
  void pieceChanged(int x, int y, int r) {
    _state.updatePiece(x, y, r);
  }

  void _scheduleTick() async {
    _cancelTick();

    if (_tickIntervalMs < min_tick_ms) {
      _animationFrame = window.requestAnimationFrame(_onAnimationFrame);
    } else {
      _tickTimer = Timer(Duration(milliseconds: _tickIntervalMs), _tick);
    }
  }

  void _cancelTick() {
    window.cancelAnimationFrame(_animationFrame);
    _tickTimer?.cancel();
  }

  void _onAnimationFrame(_) => _tick();

  void _tick() {
    if (!_isPaused && _tree != null && _tree.valid) {
      if (_state.r % piece_rotations != _tree.r) {
        press(GameInput.rotatePiece);
      } else if (_state.x > _tree.x) {
        press(GameInput.movePieceLeft);
      } else if (_state.x < _tree.x) {
        press(GameInput.movePieceRight);
      } else {
        press(GameInput.dropPiece);
      }
    }
    _scheduleTick();
  }
}
