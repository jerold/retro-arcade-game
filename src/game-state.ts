import {
  BOARD_X, BOARD_Y, RS, XS, pieces,
  boardCopy, emptyBoard, freshQueue, initialX, initialY, pixelIsEmpty,
} from './util';

export class GameState {
  private _board: number[][];
  private _queue: number[];
  private _x: number;
  private _y: number;
  private _r: number;

  constructor(board: number[][], queue: number[]) {
    this._board = board ?? emptyBoard();
    this._queue = queue ?? freshQueue();
    this._x = initialX(this.i);
    this._y = initialY(this.i);
    this._r = 0;
  }

  updatePiece(x: number, y: number, r: number): void {
    this._x = x;
    this._y = y;
    this._r = r;
  }

  get board(): number[][] { return boardCopy(this._board); }
  get queue(): number[] { return [...this._queue]; }
  get i(): number { return this._queue[0]; }
  get x(): number { return this._x; }
  get y(): number { return this._y; }
  get r(): number { return this._r; }

  get rOut(): number[] {
    return Array.from({ length: RS.length }, (_, index) => this.r === index ? 1 : 0);
  }

  get xOut(): number[] {
    return Array.from({ length: XS.length }, (_, index) => this.x === index ? 1 : 0);
  }

  get iOut(): number[] {
    return Array.from({ length: pieces.length }, (_, index) => this.i === index ? 1 : 0);
  }

  get bOut(): number[] {
    const out: number[] = [];
    let minY = BOARD_Y;
    for (let x = 0; x < BOARD_X; x++) {
      let columnAdded = false;
      for (let y = 0; y < BOARD_Y; y++) {
        if (!pixelIsEmpty(x, y, this._board)) {
          const yFromBottom = BOARD_Y - y;
          minY = Math.min(minY, yFromBottom);
          out.push(yFromBottom);
          columnAdded = true;
          break;
        }
      }
      if (!columnAdded) {
        minY = 0;
        out.push(0);
      }
    }
    for (let x = 0; x < BOARD_X; x++) {
      out[x] -= minY;
    }
    return out;
  }
}
