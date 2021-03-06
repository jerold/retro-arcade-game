import 'dart:async';
import 'dart:html';
import 'dart:math';

import 'package:retro_arcade_game/src/game_input_controller.dart';
import 'package:retro_arcade_game/src/util.dart';

// className used to trigger the bounce animation for scores
const score_bounce_class = 'bounce-score';

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
  var _highScore = 0;

  // current piece details: index, x, y, and rotation
  int get _i => _q.first;
  int _y;
  int _x;
  int _r;

  // DOM Element the board is mounted into
  Element _boardElement;
  Element _scoreElement;
  Element _highScoreElement;
  final _queueElements = <Element>[];
  bool _queueChanged = true;

  GameInputController _controller;

  Game(String selectorId, {GameInputController controller}) {
    _controller = controller ?? DecisionTreeInput();
    controller.stream.listen(_handleInput);

    final parentElement = querySelector(selectorId);
    if (parentElement == null) {
      throw Exception('Unable to find component to mount Game into "$selectorId"');
    }

    parentElement.innerHtml = '''
<div id="board"></div>
<div id="score"></div>
<div id="high-score"></div>
<div class="queue">
    <div id="q1"></div>
    <div id="q2"></div>
    <div id="q3"></div>
</div>''';

    _scoreElement = parentElement.querySelector('#score');
    _highScoreElement = parentElement.querySelector('#high-score');
    _boardElement = parentElement.querySelector('#board');
    _queueElements.addAll([
      parentElement.querySelector('#q1'),
      parentElement.querySelector('#q2'),
      parentElement.querySelector('#q3'),
    ]);

    _boardElement.innerHtml = arrayAsInnerHtml(emptyBoard());
  }

  void start() async {
    _reset();
    if (!_paused) {
      _scheduleTick();
    }
  }

  // updates the DOM to reflect the current game state
  void _paint() async {
    var composite = boardCopy(_b);

    // show predictions when possibilities have been generated
    if (_controller is PlanningSomething) {
      final ai = _controller as PlanningSomething;
      final predictY = maxValidY(ai.x, _y, ai.r, _i, _b);
      composite = merged(composite, boardCopy(pieceMask(ai.x, predictY, ai.r, _i), mask: predict_value));
    }

    final shadowY = maxValidY(_x, _y, _r, _i, _b);
    composite = merged(composite, boardCopy(pieceMask(_x, shadowY, _r, _i), mask: shadow_value));

    composite = merged(composite, pieceMask(_x, _y, _r, _i));
    final pixels = composite.expand((row) => row).toList();
    final divs = _boardElement.children;

    // marks pieces as being removed because their line was cleared
    final linesWithClears = <bool>[];
    for (var y = 0; y < board_y; y++) {
      for (var x = 0; x < board_x; x++) {
        linesWithClears.add(_lineClears.contains(y));
      }
    }

    for (var i = 0; i < divs.length; i++) {
      divs[i].className = 'pixel ${pixelClassName(pixels[i])} ${linesWithClears[i] ? "remove" : ""}';
    }

    _paintScore();
    _paintQueue();
  }

  String _scoreText() => 'Score: $_score';

  String _highScoreText() => 'Highest: $_highScore';

  void _paintScore() async {
    final scoreText = _scoreText();
    if (_scoreElement.innerText != scoreText) {
      _scoreElement.innerText = scoreText;
      if (_score != 0 && !_scoreElement.classes.contains(score_bounce_class)) {
        _scoreElement.classes.add(score_bounce_class);
        await Future.delayed(Duration(milliseconds: 400));
        _scoreElement.classes.remove(score_bounce_class);
      }
    }

    final highScoreText = _highScoreText();
    if (_highScore != 0 && _highScoreElement.innerText != highScoreText) {
      _highScoreElement.innerText = highScoreText;
      if (_highScore != 0 && !_highScoreElement.classes.contains(score_bounce_class)) {
        _highScoreElement.classes.add(score_bounce_class);
        await Future.delayed(Duration(milliseconds: 400));
        _highScoreElement.classes.remove(score_bounce_class);
      }
    }
  }

  void _paintQueue() async {
    if (_queueChanged) {
      _queueChanged = false;
      for (var i = 0; i < _queueElements.length; i++) {
        _paintQueuePiece(i);
      }
    }
  }

  void _paintQueuePiece(int i) {
    final element = _queueElements[i];
    final piece = pieces[_q[i + 1]];

    element.className = 'on-deck ${pieceSizeClassName(piece.length)}';
    element.innerHtml = arrayAsInnerHtml(piece);

    final pixels = piece.expand((row) => row).toList();
    final divs = element.children;
    for (var i = 0; i < divs.length; i++) {
      divs[i].className = 'pixel ${pixelClassName(pixels[i], queuePixel: true)}';
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
    if (_score > 0) {
      _highScore = max(_score, _highScore);
    }
    _score = 0;
    _b = emptyBoard();
    _q = _freshQueue();
    _lineClears.clear();
    // fire a board update to let the AI know what the initial board state is
    _resetPieceTransforms();
    _controller.boardChanged(_b, _q, 0);
    _paint();
  }

  Timer _tickTimer;
  void _scheduleTick() async {
    _tickTimer?.cancel();
    _tickTimer = Timer(Duration(milliseconds: max(20, _tick_interval_ms)), _tick);
  }

  // progresses the board state on an interval
  void _tick() async {
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
      _controller.boardChanged(boardWithLinesSquashed(_b, _lineClears), _q, _lineClears.length);
      if (!isValid(_x, _y, _r, _i, _b)) {
        print('Game Over');
        _reset();
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
    _q.add(rand.nextInt(pieces.length));
    _queueChanged = true;
  }

  // remove a piece index from the front of the queue
  void _dequeue() {
    _q.removeAt(0);
    _queueChanged = true;
  }

  List<int> _freshQueue() {
    _queueChanged = true;
    return freshQueue();
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

  void _togglePause() {
    _paused = !_paused;
    if (_paused) {
      _tickTimer?.cancel();
    } else {
      _scheduleTick();
    }
    _controller.pausedChange(_paused);
    print(_paused ? 'Paused' : 'Unpaused');
  }

  // change the rate a piece falls
  void _changeSpeed(int deltaMs) {
    _tick_interval_ms += deltaMs;
    _controller.speedChange(deltaMs);
    print('Speed set to tick:${_tick_interval_ms}ms');
  }

  // current piece is shifted down as far as it can go, and locked in
  void _dropPiece() {
    _y = maxValidY(_x, _y, _r, _i, _b);
    _controller.pieceChanged(_x, _y, _r);
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
    _controller.pieceChanged(_x, _y, _r);
  }

  // transforms current piece left on the board if possible
  void _movePieceLeft() {
    if (isValid(_x - 1, _y, _r, _i, _b)) {
      _x--;
      _controller.pieceChanged(_x, _y, _r);
    }
  }

  // transforms current piece right on the board if possible
  void _movePieceRight() {
    if (isValid(_x + 1, _y, _r, _i, _b)) {
      _x++;
      _controller.pieceChanged(_x, _y, _r);
    }
  }

  // transforms current piece down on the board if possible
  void _movePieceDown() {
    if (isValid(_x, _y + 1, _r, _i, _b)) {
      _y++;
      _controller.pieceChanged(_x, _y, _r);
    }
  }
}
