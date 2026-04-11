import { GameInputController } from './game-input-controller';

export interface GameRenderer {
  initializeBoard(b: number[][]): void;
  paint(
    x: number, y: number, r: number, i: number,
    b: number[][], q: number[], c: number[],
    s: number, hs: number,
    controller: GameInputController,
  ): void;
}

export class NoopRenderer implements GameRenderer {
  initializeBoard(): void {}
  paint(): void {}
}
