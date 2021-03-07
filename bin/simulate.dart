import 'dart:io';

import 'package:retro_arcade_game/arcade_game.dart';

void main(List<String> arguments) async {
  final start = DateTime.now();
  final controller = ImmediateDecisionTreeInput(100, depth: 2);

  final logger = Logger();
  controller.output.listen(logger.log);
  final game = Game(controller: controller)..start();
  await controller.finish;
  print('Complete  ${DateTime.now().difference(start).inSeconds}s');
  print('Games:${game.plays}, Score:${game.score}, HighScore:${game.highScore}');
  exit(0);
}

class Logger {
  IOSink _sink;

  Logger() {
    _sink = File('current.log').openWrite();
  }

  void log(GameState state) {
    print(state);
    _sink.write('$state\n');
  }
}
