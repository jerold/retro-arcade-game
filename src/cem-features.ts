import {
  BOARD_X, BOARD_Y, EMPTY_VALUE,
  boardWithPiece, boardWithLinesSquashed, lineClears, rotatedPiece, pixelIsEmpty,
} from './util';

/**
 * Feature 1: Landing height — the row of the center of the piece after placement.
 * Higher values (placed higher on the board) are worse.
 */
export function landingHeight(pieceY: number, rotation: number, pieceIndex: number): number {
  const p = rotatedPiece(rotation, pieceIndex);
  const pieceHeight = p.length;
  // Center of the piece vertically
  return BOARD_Y - (pieceY + pieceHeight / 2);
}

/**
 * Feature 2: Eroded cells — (lines cleared) × (cells of the placed piece in those cleared lines).
 * Rewards placements where the piece participates in line clears.
 */
export function erodedCells(
  boardAfterPlace: number[][],
  pieceX: number, pieceY: number,
  rotation: number, pieceIndex: number,
): number {
  const cleared = lineClears(boardAfterPlace);
  if (cleared.length === 0) return 0;

  const p = rotatedPiece(rotation, pieceIndex);
  let pieceCellsInCleared = 0;
  for (let py = 0; py < p.length; py++) {
    for (let px = 0; px < p[py].length; px++) {
      if (p[py][px] !== 0) {
        const boardY = pieceY + py;
        if (cleared.includes(boardY)) {
          pieceCellsInCleared++;
        }
      }
    }
  }
  return cleared.length * pieceCellsInCleared;
}

/**
 * Feature 3: Row transitions — count of filled↔empty transitions across each row.
 * Boundaries (left wall, right wall) count as filled.
 */
export function rowTransitions(board: number[][]): number {
  let transitions = 0;
  for (let y = 0; y < BOARD_Y; y++) {
    // Left boundary (wall) is considered filled
    let lastFilled = true;
    for (let x = 0; x < BOARD_X; x++) {
      const filled = board[y][x] !== EMPTY_VALUE;
      if (filled !== lastFilled) transitions++;
      lastFilled = filled;
    }
    // Right boundary (wall) is considered filled
    if (!lastFilled) transitions++;
  }
  return transitions;
}

/**
 * Feature 4: Column transitions — count of filled↔empty transitions down each column.
 * Floor is considered filled.
 */
export function colTransitions(board: number[][]): number {
  let transitions = 0;
  for (let x = 0; x < BOARD_X; x++) {
    // Top boundary is considered empty
    let lastFilled = false;
    for (let y = 0; y < BOARD_Y; y++) {
      const filled = board[y][x] !== EMPTY_VALUE;
      if (filled !== lastFilled) transitions++;
      lastFilled = filled;
    }
    // Floor is considered filled
    if (!lastFilled) transitions++;
  }
  return transitions;
}

/**
 * Feature 5: Holes — empty cells with at least one filled cell above in the same column.
 */
export function holes(board: number[][]): number {
  let count = 0;
  for (let x = 0; x < BOARD_X; x++) {
    let foundFilled = false;
    for (let y = 0; y < BOARD_Y; y++) {
      if (board[y][x] !== EMPTY_VALUE) {
        foundFilled = true;
      } else if (foundFilled) {
        count++;
      }
    }
  }
  return count;
}

/**
 * Feature 6: Cumulative wells — sum of well depths using triangular numbers.
 * A well exists at column x if both neighbors (or walls) are higher.
 * Well contribution = depth * (depth + 1) / 2 for consecutive well cells.
 */
export function cumulativeWells(board: number[][]): number {
  let total = 0;
  for (let x = 0; x < BOARD_X; x++) {
    let wellDepth = 0;
    for (let y = 0; y < BOARD_Y; y++) {
      if (board[y][x] === EMPTY_VALUE) {
        const leftFilled = x === 0 || board[y][x - 1] !== EMPTY_VALUE;
        const rightFilled = x === BOARD_X - 1 || board[y][x + 1] !== EMPTY_VALUE;
        if (leftFilled && rightFilled) {
          wellDepth++;
          total += wellDepth; // triangular: 1 + 2 + 3 + ... = d*(d+1)/2
        } else {
          wellDepth = 0;
        }
      } else {
        wellDepth = 0;
      }
    }
  }
  return total;
}

/** Extract all 6 features. Returns array in weight-order. */
export function extractFeatures(
  boardAfterPlace: number[][],
  pieceX: number, pieceY: number,
  rotation: number, pieceIndex: number,
): number[] {
  return [
    landingHeight(pieceY, rotation, pieceIndex),
    erodedCells(boardAfterPlace, pieceX, pieceY, rotation, pieceIndex),
    rowTransitions(boardAfterPlace),
    colTransitions(boardAfterPlace),
    holes(boardAfterPlace),
    cumulativeWells(boardAfterPlace),
  ];
}
