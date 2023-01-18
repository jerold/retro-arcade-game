import 'dart:io';

import 'package:retro_arcade_game/arcade_game.dart';

import 'data/d3_500.dart';

void main(List<String> arguments) {
  final patterns = <int, List<Pattern>>{};
  rp_d2_500.forEach((raw) {
    final i = raw[0];
    if (!patterns.containsKey(i)) {
      patterns[i] = <Pattern>[];
    }
    patterns[i].add(Pattern.fromRaw(raw));
  });

  final sets = <int, PatternSet>{};
  for (var i = 0; i < pieces.length; i++) {
    final ps = PatternSet(patterns[i]);
    print('${piece_avatars[i]} len:${ps.patterns.length} t:${ps.patternsByTargetType.length} c:${ps.centers.length}');
    sets[i] = ps;
  }

  final nets = <int, RBFNetwork>{};
  for (var i = 0; i < pieces.length; i++) {
    nets[i] = RBFNetwork(piece_avatars[i], sets[i]);
    nets[i].run(NetworkMode.train);
  }

  exit(0);

  // final start = DateTime.now();
  // final sink = File('data/d2_10.2.txt').openWrite();
  // final controller = ImmediateDecisionTreeInput(100000, sink.writeln, depth: 2);
  // final game = Game(controller: controller)..start();
  // controller.finish.then((_) async {
  //   print('Complete  ${DateTime.now().difference(start).inSeconds}s');
  //   print('Games:${game.plays}, Score:${game.score}, HighScore:${game.highScore}');

  //   await sink.flush();
  //   exit(0);
  // });
}
