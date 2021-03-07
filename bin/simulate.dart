import 'dart:io';

import 'package:retro_arcade_game/arcade_game.dart';

void main(List<String> arguments) {
  final start = DateTime.now();
  final logger = Logger();
  final controller = ImmediateDecisionTreeInput(100, logger.log, depth: 2);
  final game = Game(controller: controller)..start();
  controller.finish.then((_) {
    print('Complete  ${DateTime.now().difference(start).inSeconds}s');
    print('Games:${game.plays}, Score:${game.score}, HighScore:${game.highScore}');
    exit(0);
  });
}

class Logger {
  IOSink _sink;

  Logger() {
    _sink = File('pattern.txt').openWrite();
  }

  void log(GameState state) {
    print(state);
    _sink.writeln(state);
  }
}
