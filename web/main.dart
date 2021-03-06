/// Author: Jerold Albertson
/// Contact: jerold.albertson@gmail.com : github.com/jerold
/// Usage: If used, please provide visible attribution.

import 'package:retro_arcade_game/arcade_game.dart';

void main() {
  Game('#game-1', controller: UserInput.playerOne()).start();
  Game('#game-2', controller: UserInput.playerTwo()).start();
  // Game('#game-3', controller: DecisionTreeInput()).start();
}
