import 'dart:io';

import 'package:retro_arcade_game/arcade_game.dart';

import 'data/d2_10k.dart';

void main(List<String> arguments) {
  final patterns = <int, List<Pattern>>{};
  raw_patterns.forEach((raw) {
    final i = raw[0];
    if (!patterns.containsKey(i)) {
      patterns[i] = <Pattern>[];
    }
    patterns[i].add(Pattern.fromRaw(raw));
  });

  Map<int, PatternSet> sets = <int, PatternSet>{};
  for (var i = 0; i < pieces.length; i++) {
    sets[i] = PatternSet(patterns[i]);
    RBFNetwork(piece_avatars[i], sets[i]);
  }

  exit(0);

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
