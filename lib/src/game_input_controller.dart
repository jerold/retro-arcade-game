import 'dart:async';
import 'dart:math';

import 'package:retro_arcade_game/src/decision_tree.dart';
import 'package:retro_arcade_game/src/util.dart';
import 'package:retro_arcade_game/src/game_state.dart';

abstract class GameInputController {
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

  void handleGameEnded(int score) {}
}

// used to let the game know it's controller has plans
class PlanningSomething {
  int x;

  int r;
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
class DecisionTreeInput extends GameInputController with PlanningSomething {
  GameState _state;
  DecisionTree _tree;
  int _depth;

  Timer _tickTimer;
  bool _paused = false;

  DecisionTreeInput({int depth}) {
    _depth = depth ?? default_max_tree_depth;
  }

  @override
  int get x => _tree.x;

  @override
  int get r => _tree.r;

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
    _tree = DecisionTree.head(board, queue, _depth);
  }

  @override
  void handlePieceChanged(int x, int y, int r) {
    _state.updatePiece(x, y, r);
  }

  @override
  void handleGameStarted() {
    _scheduleTick();
  }

  @override
  void handleGameEnded(int score) {
    _cancelTick();
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
      if (_state.r % piece_rotations != _tree.r) {
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

class ImmediateDecisionTreeInput extends DecisionTreeInput with Immediate {
  final int _cycles;
  int _i = 0;

  final StreamController<GameState> _outController = StreamController<GameState>.broadcast();
  Stream<GameState> get output => _outController.stream;

  final Completer _completer = Completer();
  Future get finish => _completer.future;

  int get branching => DecisionTree.branchCount;

  ImmediateDecisionTreeInput(this._cycles, {int depth}) : super(depth: depth);

  @override
  void handleBoardChanged(List<List<int>> board, List<int> queue) {
    if (!_completer.isCompleted) {
      if (_i < _cycles) {
        _i++;
        super.handleBoardChanged(board, queue);
        if (_tree.valid) {
          move(_tree.x, _tree.r);
          _outController.add(GameState(board, queue)..updatePiece(_tree.x, 0, _tree.r));
        }
      } else {
        _completer.complete();
      }
    }
  }

  @override
  void handleGameStarted() {}

  @override
  void _tick() {}
}
