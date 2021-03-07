import 'package:retro_arcade_game/src/game_input_controller.dart';

abstract class GameRenderer {
  void initializeBoard(List<List<int>> b) async {}

  void paint(int x, int y, int r, int i, List<List<int>> b, List<int> q, List<int> c, int s, int hs,
      GameInputController controller) async {}
}

class NoopRenderer implements GameRenderer {
  @override
  void initializeBoard(_) async {}

  @override
  void paint(_, __, ___, ____, _____, ______, _______, ________, _________, __________) async {}
}
