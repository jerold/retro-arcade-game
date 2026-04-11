import {
  BOARD_X, PIECE_RS,
  isValid, maxValidY, boardWithPiece, boardWithLinesSquashed, lineClears,
} from './util';
import {
  landingHeight, erodedCells, rowTransitions, colTransitions, holes, cumulativeWells,
} from './cem-features';

export interface CEMPlacement {
  rotation: number;
  x: number;
  score: number;
}

/**
 * Evaluate all valid placements for a piece and return the best one.
 * No lookahead — scores based on the resulting board state after placement.
 */
export function evaluateBestPlacement(
  board: number[][],
  pieceIndex: number,
  weights: number[],
): CEMPlacement | null {
  let best: CEMPlacement | null = null;

  const maxRotations = PIECE_RS[pieceIndex];

  for (let r = 0; r < maxRotations; r++) {
    for (let x = -2; x <= BOARD_X; x++) {
      // Find a valid starting y for this (x, r) combination
      let startY: number | null = null;
      for (let tryY = -2; tryY <= 0; tryY++) {
        if (isValid(x, tryY, r, pieceIndex, board)) {
          startY = tryY;
          break;
        }
      }
      if (startY === null) continue;

      // Drop to landing position
      const landY = maxValidY(x, startY, r, pieceIndex, board);

      // Simulate placement
      const boardAfterPlace = boardWithPiece(x, landY, r, pieceIndex, board);

      // Clear lines and get post-clear board
      const cleared = lineClears(boardAfterPlace);
      const boardAfterClear = cleared.length > 0
        ? boardWithLinesSquashed(boardAfterPlace, cleared)
        : boardAfterPlace;

      // Extract 6 features
      const features = [
        landingHeight(landY, r, pieceIndex),
        erodedCells(boardAfterPlace, x, landY, r, pieceIndex),
        rowTransitions(boardAfterClear),
        colTransitions(boardAfterClear),
        holes(boardAfterClear),
        cumulativeWells(boardAfterClear),
      ];

      // Score = weighted sum
      let score = 0;
      for (let i = 0; i < weights.length; i++) {
        score += weights[i] * features[i];
      }

      if (best === null || score > best.score) {
        best = { rotation: r, x, score };
      }
    }
  }

  return best;
}
