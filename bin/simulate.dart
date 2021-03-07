import 'dart:io';

import 'package:retro_arcade_game/arcade_game.dart';

void main(List<String> arguments) {
  final start = DateTime.now();
  final sink = File('pattern.txt').openWrite();
  final controller = ImmediateDecisionTreeInput(10000, sink.writeln, depth: 3);
  final game = Game(controller: controller)..start();
  controller.finish.then((_) async {
    print('Complete  ${DateTime.now().difference(start).inSeconds}s');
    print('Games:${game.plays}, Score:${game.score}, HighScore:${game.highScore}');

    await sink.flush();
    exit(0);
  });
}
