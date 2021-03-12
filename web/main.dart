/// Author: Jerold Albertson
/// Contact: jerold.albertson@gmail.com : github.com/jerold
/// Usage: If used, please provide visible attribution.

import 'dart:html';

import 'package:retro_arcade_game/arcade_game.dart';

const String p1 = 'p1';
const String pvp = 'pvp';
const String pvc = 'pvc';

void main() {
  setMode();

  Game(controller: UserInput.playerTwo(), renderer: WebRenderer('#game-1')).start();
  // Game(controller: DecisionTreeInput(depth: 2), renderer: WebRenderer('#game-1')).start();
  Game(controller: UserInput.playerOne(), renderer: WebRenderer('#game-2')).start();
  Game(controller: AIInput(), renderer: WebRenderer('#game-3')).start();
}

void setMode() {
  final mode = document.baseUri.split('/#/');
  switch (mode.last) {
    case p1:
      querySelector('#game-1').style.display = 'none';
      querySelector('#game-2').style.display = 'flex';
      querySelector('#game-3').style.display = 'none';
      break;
    case pvp:
      querySelector('#game-1').style.display = 'flex';
      querySelector('#game-2').style.display = 'flex';
      querySelector('#game-3').style.display = 'none';
      break;
    case pvc:
      querySelector('#game-1').style.display = 'none';
      querySelector('#game-2').style.display = 'flex';
      querySelector('#game-3').style.display = 'flex';
      break;
    default:
      window.location.assign('${mode.first}#/$p1');
      setMode();
      break;
  }
}

// className used to trigger the bounce animation for scores
const score_bounce_class = 'bounce-score';

const Map<int, GameInput> player_one_bindings = {
  KeyCode.ENTER: GameInput.dropPiece,
  KeyCode.UP: GameInput.rotatePiece,
  KeyCode.LEFT: GameInput.movePieceLeft,
  KeyCode.RIGHT: GameInput.movePieceRight,
  KeyCode.DOWN: GameInput.movePieceDown,
};

const Map<int, GameInput> player_two_bindings = {
  KeyCode.SPACE: GameInput.dropPiece,
  KeyCode.W: GameInput.rotatePiece,
  KeyCode.A: GameInput.movePieceLeft,
  KeyCode.D: GameInput.movePieceRight,
  KeyCode.S: GameInput.movePieceDown,
};

const Map<int, GameInput> setup_bindings = {
  KeyCode.ESC: GameInput.reset,
  KeyCode.P: GameInput.togglePause,
  KeyCode.NUM_PLUS: GameInput.increaseSpeed,
  KeyCode.EQUALS: GameInput.increaseSpeed,
  KeyCode.NUM_MINUS: GameInput.decreaseSpeed,
  KeyCode.DASH: GameInput.decreaseSpeed,
};

// binds user key presses to specific game controls
class UserInput extends GameInputController {
  final Map<int, GameInput> _pieceBindings;

  UserInput(this._pieceBindings) {
    document.body.onKeyDown.listen(_onKeyDown);
  }

  factory UserInput.playerOne() => UserInput(player_one_bindings);

  factory UserInput.playerTwo() => UserInput(player_two_bindings);

  void _onKeyDown(KeyboardEvent e) {
    if (_pieceBindings.containsKey(e.keyCode)) {
      input(_pieceBindings[e.keyCode]);
    } else if (setup_bindings.containsKey(e.keyCode)) {
      input(setup_bindings[e.keyCode]);
    }
  }
}

class AIInput extends DecisionTreeInput {
  AIInput({int depth}) : super(depth: depth) {
    document.body.onKeyDown.listen(_onKeyDown);
  }

  void _onKeyDown(KeyboardEvent e) {
    if (setup_bindings.containsKey(e.keyCode)) {
      input(setup_bindings[e.keyCode]);
    }
  }
}

class WebRenderer implements GameRenderer {
  final String _selectorId;

  Element get _parentElement => querySelector(_selectorId);
  Element get _boardElement => _parentElement.querySelector('#board');
  Element get _scoreElement => _parentElement.querySelector('#score');
  Element get _highScoreElement => _parentElement.querySelector('#high-score');
  List<Element> get _queueElements => <Element>[
        _parentElement.querySelector('#q1'),
        _parentElement.querySelector('#q2'),
        _parentElement.querySelector('#q3'),
      ];

  // used to compare queues across paints
  List<int> _previousQ = <int>[];

  WebRenderer(this._selectorId);

  @override
  void initializeBoard(List<List<int>> b) async {
    if (_parentElement == null) {
      throw Exception('Unable to find component to mount Game into "$_selectorId"');
    }

    _parentElement.innerHtml = '''
<div id="board"></div>
<div id="score"></div>
<div id="high-score"></div>
<div class="queue">
    <div id="q1"></div>
    <div id="q2"></div>
    <div id="q3"></div>
</div>''';

    _boardElement.innerHtml = arrayAsInnerHtml(b);
  }

  @override
  void paint(int x, int y, int r, int i, List<List<int>> b, List<int> q, List<int> c, int s, int hs,
      GameInputController controller) async {
    var composite = boardCopy(b);
    var queue = [...q];

    // show predictions when possibilities have been generated
    if (controller is PlanningSomething && (controller as PlanningSomething).isReady) {
      final ai = controller as PlanningSomething;
      final predictY = maxValidY(ai.x, y, ai.r, i, b);
      composite = merged(composite, boardCopy(pieceMask(ai.x, predictY, ai.r, i), mask: predict_value));
    }

    final shadowY = maxValidY(x, y, r, i, b);
    composite = merged(composite, boardCopy(pieceMask(x, shadowY, r, i), mask: shadow_value));

    composite = merged(composite, pieceMask(x, y, r, i));
    final pixels = composite.expand((row) => row).toList();
    final divs = _boardElement.children;

    // marks pieces as being removed because their line was cleared
    final linesWithClears = <bool>[];
    for (var y = 0; y < board_y; y++) {
      for (var x = 0; x < board_x; x++) {
        linesWithClears.add(c.contains(y));
      }
    }

    for (var i = 0; i < divs.length; i++) {
      divs[i].className = 'pixel ${pixelClassName(pixels[i])} ${linesWithClears[i] ? "remove" : ""}';
    }

    _paintScore(s, hs);
    _paintQueue(queue);
  }

  String _scoreText(int s) => 'Score: $s';

  String _highScoreText(int hs) => 'Highest: $hs';

  void _paintScore(int s, int hs) async {
    final scoreText = _scoreText(s);
    if (_scoreElement.innerText != scoreText) {
      _scoreElement.innerText = scoreText;
      if (s != 0 && !_scoreElement.classes.contains(score_bounce_class)) {
        _scoreElement.classes.add(score_bounce_class);
        await Future.delayed(Duration(milliseconds: 400));
        _scoreElement.classes.remove(score_bounce_class);
      }
    }

    final highScoreText = _highScoreText(hs);
    if (hs != 0 && _highScoreElement.innerText != highScoreText) {
      _highScoreElement.innerText = highScoreText;
      if (hs != 0 && !_highScoreElement.classes.contains(score_bounce_class)) {
        _highScoreElement.classes.add(score_bounce_class);
        await Future.delayed(Duration(milliseconds: 400));
        _highScoreElement.classes.remove(score_bounce_class);
      }
    }
  }

  void _paintQueue(List<int> q) async {
    if (!sameLists(q, _previousQ)) {
      for (var i = 0; i < _queueElements.length; i++) {
        _paintQueuePiece(i, q);
      }
    }
    _previousQ = q;
  }

  void _paintQueuePiece(int i, List<int> q) {
    final element = _queueElements[i];
    final piece = pieces[q[i + 1]];

    element.className = 'on-deck ${pieceSizeClassName(piece.length)}';
    element.innerHtml = arrayAsInnerHtml(piece);

    final pixels = piece.expand((row) => row).toList();
    final divs = element.children;
    for (var i = 0; i < divs.length; i++) {
      divs[i].className = 'pixel ${pixelClassName(pixels[i], queuePixel: true)}';
    }
  }
}

String arrayAsInnerHtml(List<List<int>> board) => board.expand((row) => row.map(pixelAsInnerHtml)).join();

String pixelAsInnerHtml(int pixel) => '<div class="pixel ${pixelClassName(pixel)}"></div>';

String pieceSizeClassName(int size) {
  switch (size) {
    case 2:
      return 'x2';
    case 4:
      return 'x4';
    default:
      return 'x3';
  }
}

String pixelClassName(int pixel, {bool queuePixel = false}) {
  switch (pixel) {
    case 0:
      return queuePixel ? 'q-empty' : 'empty';
    case -1:
      return 'shadow';
    case -2:
      return 'predict';
    default:
      return 'piece-${pixel}';
  }
}
