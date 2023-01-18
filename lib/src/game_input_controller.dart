import 'dart:async';
import 'dart:html';
import 'dart:math';

import 'package:retro_arcade_game/src/decision_tree.dart';
import 'package:retro_arcade_game/src/util.dart';
import 'package:retro_arcade_game/src/game_state.dart';

const Map<int, GameInput> setup_bindings = {
  KeyCode.ESC: GameInput.reset,
  KeyCode.P: GameInput.togglePause,
  KeyCode.NUM_PLUS: GameInput.increaseSpeed,
  KeyCode.EQUALS: GameInput.increaseSpeed,
  KeyCode.NUM_MINUS: GameInput.decreaseSpeed,
  KeyCode.DASH: GameInput.decreaseSpeed,
};

class GameInputController {
  GameInputController() {
    document.body.onKeyDown.listen(onKeyDown);
  }

  void onKeyDown(KeyboardEvent e) {
    print('$runtimeType ${setup_bindings.containsKey(e.keyCode)}');
    if (setup_bindings.containsKey(e.keyCode)) {
      input(setup_bindings[e.keyCode]);
    }
  }

  final StreamController<GameInput> _inputStreamController = StreamController<GameInput>.broadcast();

  Stream<GameInput> get inputStream => _inputStreamController.stream;

  bool _isPaused = false;

  int _tickIntervalMs = default_auto_tick_ms;

  // GAME INTERFACE

  // called by game when setting is changed
  void setPaused(bool isPaused) {
    _isPaused = isPaused;
    handlePausedChanged(isPaused);
  }

  // called by game when setting is changed
  void changeSpeed(int deltaMs) {
    _tickIntervalMs += deltaMs;
    print('Speed set to tick:${_tickIntervalMs}ms');
  }

  void changeBoard(List<List<int>> board, List<int> queue) {
    handleBoardChanged(board, queue);
  }

  void changePiece(int x, int y, int r) {
    handlePieceChanged(x, y, r);
  }

  void gameStarted() {
    handleGameStarted();
  }

  void gameEnded() {
    handleGameEnded();
  }

  // CONTROLLER INTERFACE

  // Generates Input for the game to respond to
  void input(GameInput i) => _inputStreamController.add(i);

  // Hook for Controllers to respond to
  void handlePausedChanged(bool isPaused) {}

  // called by game: assumes piece is reset to defaults when the board changes
  void handleBoardChanged(List<List<int>> board, List<int> queue) {}

  // called by game: between board updates the piece is moved around until it locks
  void handlePieceChanged(int x, int y, int r) {}

  void handleGameStarted() {}

  void handleGameEnded() {}
}

// used to let the game know it's controller has plans
class PlanningSomething {
  int x;

  int r;

  bool isReady;
}

class PieceMove {
  final int x;
  final int r;

  PieceMove(this.x, this.r);
}

mixin Immediate {
  final StreamController<PieceMove> _moveStreamController = StreamController<PieceMove>.broadcast();

  // GAME INTERFACE

  Stream<PieceMove> get moveStream => _moveStreamController.stream;

  // CONTROLLER INTERFACE

  void move(int x, int r) => _moveStreamController.add(PieceMove(x, r));
}

// hooks an ai up to a board and translates the AI's output to game controls
class AIInput extends GameInputController with PlanningSomething {
  GameState _state;
  DecisionTree _tree;
  int _depth;

  Timer _tickTimer;
  bool _paused = false;

  AIInput({int depth}) {
    _depth = depth ?? default_max_tree_depth;
  }

  @override
  int get x => _tree.x;

  @override
  int get r => _tree.r;

  @override
  bool get isReady => _tree.valid;

  @override
  void handlePausedChanged(bool isPaused) {
    _paused = isPaused;
    if (isPaused) {
      _cancelTick();
    } else {
      _scheduleTick();
    }
  }

  @override
  void handleBoardChanged(List<List<int>> board, List<int> queue) {
    _state = GameState(board, queue);
    // final start = DateTime.now();
    _tree = DecisionTree.head(board, queue, _depth);
    // print('time:${DateTime.now().difference(start).inMilliseconds}ms branching:${DecisionTree.branchCount}');
  }

  @override
  void handlePieceChanged(int x, int y, int r) {
    _state.updatePiece(x, y, r);
  }

  @override
  void handleGameStarted() {
    _scheduleTick();
  }

  void _scheduleTick() {
    if (!_paused) {
      _cancelTick();
      _tickTimer = Timer(Duration(milliseconds: max(min_tick_ms, _tickIntervalMs)), _tick);
    }
  }

  void _cancelTick() {
    _tickTimer?.cancel();
  }

  void _tick() {
    if (!_isPaused && _tree != null && _tree.valid) {
      if (_state.r % rs.length != _tree.r) {
        input(GameInput.rotatePiece);
      } else if (_state.x > _tree.x) {
        input(GameInput.movePieceLeft);
      } else if (_state.x < _tree.x) {
        input(GameInput.movePieceRight);
      } else {
        input(GameInput.dropPiece);
      }
    }
    _scheduleTick();
  }
}

class ImmediateDecisionTreeInput extends AIInput with Immediate {
  final int _cycles;
  int _j = 0;

  final Completer _completer = Completer();
  Future get finish => _completer.future;

  int get branching => DecisionTree.branchCount;

  final void Function(GameState) _log;

  ImmediateDecisionTreeInput(this._cycles, this._log, {int depth}) : super(depth: depth);

  @override
  void handleBoardChanged(List<List<int>> board, List<int> queue) {
    if (!_completer.isCompleted) {
      if (_j < _cycles) {
        _j++;
        super.handleBoardChanged(board, queue);
        if (_tree.valid) {
          if (_j % 100 == 0) print('$_j branching:${DecisionTree.branchCount}');
          move(_tree.x, _tree.r);
          _log(GameState(board, queue)..updatePiece(_tree.x, 0, _tree.r));
        }
      } else {
        _completer.complete();
      }
    }
  }

  @override
  void handleGameStarted() {}

  @override
  void handleGameEnded() {
    _completer.complete();
  }

  @override
  void _tick() {}
}
