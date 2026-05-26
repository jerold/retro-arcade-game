// board dimensions
export const BOARD_Y = 24;
export const BOARD_X = 10;

// values used for empty and shadowed pixels
export const EMPTY_VALUE = 0;
export const SHADOW_VALUE = -1;
export const PREDICT_VALUE = -2;

// ai's search tree depth
export const DEFAULT_MAX_TREE_DEPTH = 2;

// rate at which the game progresses
export const MS_INC = 50;

// anything smaller might as well be handled with an animation frame
export const MIN_TICK_MS = 20;

// initial default speed for the game
export const DEFAULT_GAME_TICK_MS = 400;

// initial default speed for the ai actions
export const DEFAULT_AUTO_TICK_MS = 320;

export enum GameInput {
  reset,
  dropPiece,
  rotatePiece,
  movePieceLeft,
  movePieceRight,
  movePieceDown,
  togglePause,
  increaseSpeed,
  decreaseSpeed,
}

// maps the score for completing the given number of lines
export function scoreForLines(lineCount: number): number {
  switch (lineCount) {
    case 1: return 40;
    case 2: return 100;
    case 3: return 300;
    case 4: return 1200;
  }
  return 0;
}

// mulberry32 seeded PRNG — returns a function yielding [0,1) floats
function mulberry32(seed: number): () => number {
  let s = seed | 0;
  return () => {
    s = (s + 0x6D2B79F5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export class SeededBag {
  private _bag: number[] = [];
  private _rand: () => number;

  constructor(seed?: number) {
    this._rand = mulberry32(seed ?? (Math.random() * 0xFFFFFFFF));
  }

  next(): number {
    if (this._bag.length === 0) {
      this._bag = Array.from({ length: pieces.length }, (_, i) => i);
    }
    const bagIndex = Math.floor(this._rand() * this._bag.length);
    const index = this._bag[bagIndex];
    this._bag.splice(bagIndex, 1);
    return index;
  }

  freshQueue(): number[] {
    return Array.from({ length: 4 }, () => this.next());
  }
}

// default global bag for single-player modes
const _defaultBag = new SeededBag();

export function pieceIndexFromBag(): number {
  return _defaultBag.next();
}

export function freshQueue(): number[] {
  return _defaultBag.freshQueue();
}

// assuming the board is valid with the piece at a given x find
// how far the piece can be dropped while still being valid
export function maxValidY(x: number, y: number, r: number, i: number, b: number[][]): number {
  let dy = 0;
  while (isValid(x, y + dy + 1, r, i, b)) {
    dy++;
  }
  return y + dy;
}

// counts the consecutive empty rows from the top of the board
export function headspace(b: number[][]): number {
  let result = 0;
  for (let y = 0; y < BOARD_Y; y++) {
    for (let x = 0; x < BOARD_X; x++) {
      if (!pixelIsEmpty(x, y, b)) {
        return result;
      }
    }
    result++;
  }
  return result;
}

// counts the number of empty pixels with no way to fill them from above
export function voids(b: number[][]): number {
  const clearAbove = new Array(BOARD_X).fill(true);
  let v = 0;
  for (let y = 0; y < BOARD_Y; y++) {
    for (let x = 0; x < BOARD_X; x++) {
      if (pixelIsEmpty(x, y, b)) {
        if (!clearAbove[x]) {
          v++;
        }
      } else {
        clearAbove[x] = false;
      }
    }
  }
  return v;
}

// true if a piece is 100% on the board and doesn't intersect non-empty board pixels
export function isValid(x: number, y: number, r: number, i: number, b: number[][]): boolean {
  const p = rotatedPiece(r, i);
  for (let py = 0; py < p.length; py++) {
    for (let px = 0; px < p[py].length; px++) {
      const bx = px + x;
      const by = py + y;
      if (!pixelIsEmpty(px, py, p)) {
        if (!xOnBoard(bx) || !yOnBoard(by)) {
          return false;
        } else if (!pixelIsEmpty(bx, by, b)) {
          return false;
        }
      }
    }
  }
  return true;
}

export function pixelIsEmpty(x: number, y: number, m: number[][]): boolean {
  return m[y][x] === 0;
}

export function yOnBoard(y: number): boolean {
  return y >= 0 && y < BOARD_Y;
}

export function xOnBoard(x: number): boolean {
  return x >= 0 && x < BOARD_X;
}

// returns the row indexes that are complete and can be scored and removed
export function lineClears(b: number[][]): number[] {
  const l: number[] = [];
  for (let y = 0; y < BOARD_Y; y++) {
    let clearLine = true;
    for (let x = 0; x < BOARD_X; x++) {
      if (pixelIsEmpty(x, y, b)) {
        clearLine = false;
      }
    }
    if (clearLine) {
      l.push(y);
    }
  }
  return l;
}

// returns a copy of the board with pixels in given lines set to empty_value
export function boardWithLinesEmptied(b: number[][], l: number[]): number[][] {
  const n = boardCopy(b);
  for (let y = l.length - 1; y >= 0; y--) {
    for (let x = 0; x < BOARD_X; x++) {
      n[l[y]][x] = EMPTY_VALUE;
    }
  }
  return n;
}

// returns a copy of the board with given lines squashed (replaced from above)
export function boardWithLinesSquashed(b: number[][], l: number[]): number[][] {
  const n = boardCopy(b);
  for (let y = l.length - 1; y >= 0; y--) {
    n.splice(l[y], 1);
  }
  for (let j = 0; j < l.length; j++) {
    n.unshift(new Array(BOARD_X).fill(EMPTY_VALUE));
  }
  return n;
}

// returns a copy of b1 with non-empty pixels from b2 added to it
export function merged(b1: number[][], b2: number[][]): number[][] {
  const b: number[][] = [];
  for (let y = 0; y < BOARD_Y; y++) {
    b.push([]);
    for (let x = 0; x < BOARD_X; x++) {
      b[y].push(!pixelIsEmpty(x, y, b2) ? b2[y][x] : b1[y][x]);
    }
  }
  return b;
}

export function sameLists(l1: number[], l2: number[]): boolean {
  if (l1.length !== l2.length) return false;
  for (let i = 0; i < l1.length; i++) {
    if (l1[i] !== l2[i]) return false;
  }
  return true;
}

// returns a board sized 2d array with a piece's pixels set within it
export function pieceMask(x: number, y: number, r: number, i: number): number[][] {
  return boardWithPiece(x, y, r, i, emptyBoard());
}

// returns a copy of the given board with a piece's pixels added
export function boardWithPiece(x: number, y: number, r: number, i: number, b: number[][]): number[][] {
  const n = boardCopy(b);
  const p = rotatedPiece(r, i);
  for (let py = 0; py < p.length; py++) {
    for (let px = 0; px < p[py].length; px++) {
      const by = py + y;
      const bx = px + x;
      if (!pixelIsEmpty(px, py, p) && xOnBoard(bx) && yOnBoard(by)) {
        n[by][bx] = p[py][px];
      }
    }
  }
  return n;
}

export function emptyBoard(): number[][] {
  const b: number[][] = [];
  for (let y = 0; y < BOARD_Y; y++) {
    b.push(new Array(BOARD_X).fill(EMPTY_VALUE));
  }
  return b;
}

// returns a board sized 2d array identical to the one provided
export function boardCopy(b: number[][], mask?: number): number[][] {
  const n: number[][] = [];
  for (let y = 0; y < BOARD_Y; y++) {
    n.push([]);
    for (let x = 0; x < BOARD_X; x++) {
      if (pixelIsEmpty(x, y, b)) {
        n[y].push(EMPTY_VALUE);
      } else {
        n[y].push(mask !== undefined ? mask : b[y][x]);
      }
    }
  }
  return n;
}

// yield the difference a piece would make to the topology of a board
export function topoDelta(x: number, r: number, i: number, t: number[]): number {
  let d = 0;
  const pt = pieceTopo(i, r);
  const ptm = pieceTopoMask(i, r);

  let sit = 0;
  for (let j = 0; j < pt.length; j++) {
    const bx = x + j;
    if (xOnBoard(bx) && ptm[j]) {
      const thisSit = t[bx] - pt[j];
      if (thisSit > sit) {
        sit = thisSit;
      }
    }
  }
  for (let j = 0; j < pt.length; j++) {
    const bx = x + j;
    const di = xOnBoard(bx) && ptm[j] ? Math.abs(pt[j] + sit - t[bx]) : 0;
    d += di;
  }
  return d;
}

export function boardTopology(b: number[][]): number[] {
  const e: number[] = [];
  let lowestPoint = 0;
  for (let x = 0; x < BOARD_X; x++) {
    let y = 0;
    while (y + 1 < BOARD_Y && pixelIsEmpty(x, y + 1, b)) {
      y++;
    }
    if (y > lowestPoint) {
      lowestPoint = y;
    }
    e.push(y);
  }
  for (let x = 0; x < BOARD_X; x++) {
    e[x] = lowestPoint - e[x];
  }
  return e;
}

// returns a 2d array representing a piece rotated clockwise r times
export function rotatedPiece(r: number, i: number): number[][] {
  let piece = pieces[i];
  for (let j = 0; j < r; j++) {
    piece = rotateCW(piece);
  }
  return piece;
}

// rotates the given 2d array 90 degrees clockwise
export function rotateCW(piece: number[][]): number[][] {
  const len = piece.length;
  const rotation: number[][] = [];
  for (let y = 0; y < len; y++) {
    rotation.push([]);
    for (let x = 0; x < len; x++) {
      rotation[y].push(piece[len - 1 - x][y]);
    }
  }
  return rotation;
}

// returns the starting x for a specific piece index
export function initialX(pieceIndex: number): number {
  switch (pieceIndex) {
    case 0: return 4;
    default: return 3;
  }
}

// returns the starting y for a specific piece index
export function initialY(pieceIndex: number): number {
  switch (pieceIndex) {
    case 1:
    case 2:
    case 3:
    case 6:
      return -1;
    default:
      return 0;
  }
}

// rotation values used while branching to explore game space
export const RS = [0, 1, 2, 3];

// x values used while branching to explore game space
export const XS = [-2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8];

// list of rotations that do not share symmetry
export const PIECE_RS: number[] = [1, 2, 2, 2, 4, 4, 4];

export function pieceTopo(i: number, r: number): number[] {
  return pieceTopos[i][r];
}

function genPieceTopos(): number[][][] {
  const topos: number[][][] = [];
  for (let i = 0; i < pieces.length; i++) {
    topos.push([]);
    for (let r = 0; r < PIECE_RS[i]; r++) {
      const piece = rotatedPiece(r, i);
      topos[i].push(genPieceTopo(piece));
    }
  }
  return topos;
}

function genPieceTopo(piece: number[][]): number[] {
  const topo = new Array(piece.length).fill(0);
  const done = new Array(piece.length).fill(false);
  let bottomY: number | undefined;
  for (let y = piece.length - 1; y >= 0; y--) {
    for (let x = 0; x < piece.length; x++) {
      if (!pixelIsEmpty(x, y, piece) && !done[x]) {
        if (bottomY === undefined) bottomY = y;
        topo[x] = bottomY - y;
        done[x] = true;
      }
    }
  }
  return topo;
}

export function pieceTopoMask(i: number, r: number): boolean[] {
  return pieceTopoMasks[i][r];
}

function genPieceTopoMasks(): boolean[][][] {
  const mask: boolean[][][] = [];
  for (let i = 0; i < pieces.length; i++) {
    mask.push([]);
    for (let r = 0; r < PIECE_RS[i]; r++) {
      const piece = rotatedPiece(r, i);
      mask[i].push(getPieceTopoMask(piece));
    }
  }
  return mask;
}

function getPieceTopoMask(piece: number[][]): boolean[] {
  const mask = new Array(piece.length).fill(false);
  for (let y = 0; y < piece.length; y++) {
    for (let x = 0; x < piece.length; x++) {
      if (!pixelIsEmpty(x, y, piece)) {
        mask[x] = true;
      }
    }
  }
  return mask;
}

// list of 2d arrays encoding each pieces' shape and color
export const pieces: number[][][] = [
  [
    [1, 1],
    [1, 1],
  ],
  [
    [0, 0, 0, 0],
    [2, 2, 2, 2],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  [
    [0, 0, 0],
    [0, 3, 3],
    [3, 3, 0],
  ],
  [
    [0, 0, 0],
    [4, 4, 0],
    [0, 4, 4],
  ],
  [
    [0, 5, 0],
    [0, 5, 0],
    [0, 5, 5],
  ],
  [
    [0, 6, 0],
    [0, 6, 0],
    [6, 6, 0],
  ],
  [
    [0, 0, 0],
    [7, 7, 7],
    [0, 7, 0],
  ],
];

// pre-computed topology data
const pieceTopos = genPieceTopos();
const pieceTopoMasks = genPieceTopoMasks();
