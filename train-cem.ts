/**
 * CEM Training Script — Cross-Entropy Method for Tetris weight optimization.
 * Run: npx tsx train-cem.ts
 * Output: writes optimized weights to src/cem-weights.json
 */

import { writeFileSync } from 'fs';
import {
  BOARD_X, BOARD_Y, EMPTY_VALUE, PIECE_RS,
  emptyBoard, isValid, maxValidY,
  boardWithPiece, boardWithLinesSquashed, lineClears,
} from './src/util';
import {
  landingHeight, erodedCells, rowTransitions, colTransitions, holes, cumulativeWells,
} from './src/cem-features';

// --- Config ---
const GENERATIONS = 30;
const POPULATION = 100;
const ELITE_FRACTION = 0.1;
const STD_FLOOR = 0.01;
const NUM_FEATURES = 6;
const MAX_PIECES = 500; // cap per game to keep training fast

// --- Headless game simulation ---

function simulateGame(weights: number[]): number {
  let board = emptyBoard();
  let totalLinesCleared = 0;
  let piecesPlaced = 0;

  // Reset bag state for fair comparison
  let bag: number[] = [];
  function nextPiece(): number {
    if (bag.length === 0) {
      bag = Array.from({ length: 7 }, (_, i) => i);
    }
    const idx = Math.floor(Math.random() * bag.length);
    const piece = bag[idx];
    bag.splice(idx, 1);
    return piece;
  }

  while (piecesPlaced < MAX_PIECES) {
    const pieceIndex = nextPiece();

    // Find best placement
    let bestScore = -Infinity;
    let bestX = 0;
    let bestR = 0;
    let bestBoard: number[][] | null = null;
    let bestCleared = 0;

    const maxRotations = PIECE_RS[pieceIndex];

    for (let r = 0; r < maxRotations; r++) {
      for (let x = -2; x <= BOARD_X; x++) {
        let startY: number | null = null;
        for (let tryY = -2; tryY <= 0; tryY++) {
          if (isValid(x, tryY, r, pieceIndex, board)) {
            startY = tryY;
            break;
          }
        }
        if (startY === null) continue;

        const landY = maxValidY(x, startY, r, pieceIndex, board);
        const boardAfterPlace = boardWithPiece(x, landY, r, pieceIndex, board);
        const cleared = lineClears(boardAfterPlace);
        const boardAfterClear = cleared.length > 0
          ? boardWithLinesSquashed(boardAfterPlace, cleared)
          : boardAfterPlace;

        const features = [
          landingHeight(landY, r, pieceIndex),
          erodedCells(boardAfterPlace, x, landY, r, pieceIndex),
          rowTransitions(boardAfterClear),
          colTransitions(boardAfterClear),
          holes(boardAfterClear),
          cumulativeWells(boardAfterClear),
        ];

        let score = 0;
        for (let i = 0; i < weights.length; i++) {
          score += weights[i] * features[i];
        }

        if (score > bestScore) {
          bestScore = score;
          bestX = x;
          bestR = r;
          bestBoard = boardAfterClear;
          bestCleared = cleared.length;
        }
      }
    }

    // No valid placement = game over
    if (bestBoard === null) break;

    board = bestBoard;
    totalLinesCleared += bestCleared;
    piecesPlaced++;
  }

  return totalLinesCleared;
}

// --- CEM Training Loop ---

function trainCEM(): number[] {
  let mean = new Array(NUM_FEATURES).fill(0);
  let std = new Array(NUM_FEATURES).fill(1);

  let bestOverallWeights = mean.slice();
  let bestOverallScore = 0;

  for (let gen = 0; gen < GENERATIONS; gen++) {
    // Sample population
    const population: { weights: number[]; score: number }[] = [];

    for (let p = 0; p < POPULATION; p++) {
      const weights = mean.map((m, i) => m + std[i] * gaussianRandom());
      const score = simulateGame(weights);
      population.push({ weights, score });
    }

    // Sort by score (descending)
    population.sort((a, b) => b.score - a.score);

    // Keep elite
    const eliteCount = Math.max(1, Math.floor(POPULATION * ELITE_FRACTION));
    const elite = population.slice(0, eliteCount);

    // Update mean and std from elite
    for (let i = 0; i < NUM_FEATURES; i++) {
      const values = elite.map(e => e.weights[i]);
      mean[i] = values.reduce((a, b) => a + b, 0) / values.length;
      const variance = values.reduce((a, v) => a + (v - mean[i]) ** 2, 0) / values.length;
      std[i] = Math.max(STD_FLOOR, Math.sqrt(variance));
    }

    // Track best overall
    if (elite[0].score > bestOverallScore) {
      bestOverallScore = elite[0].score;
      bestOverallWeights = elite[0].weights.slice();
    }

    const avgScore = elite.reduce((a, e) => a + e.score, 0) / elite.length;

    console.log(
      `Gen ${(gen + 1).toString().padStart(2)}: ` +
      `best=${elite[0].score.toString().padStart(7)} ` +
      `avg=${Math.round(avgScore).toString().padStart(7)} ` +
      `overall_best=${bestOverallScore.toString().padStart(7)} ` +
      `weights=[${elite[0].weights.map(w => w.toFixed(3)).join(', ')}]`
    );
  }

  return bestOverallWeights;
}

// Box-Muller transform for Gaussian random numbers
function gaussianRandom(): number {
  let u = 0, v = 0;
  while (u === 0) u = Math.random();
  while (v === 0) v = Math.random();
  return Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
}

// --- Main ---

console.log('CEM Tetris Weight Trainer');
console.log(`Config: ${GENERATIONS} generations, ${POPULATION} population, ${ELITE_FRACTION * 100}% elite`);
console.log('Training...\n');

const bestWeights = trainCEM();

console.log('\n=== Training Complete ===');
console.log(`Best weights: [${bestWeights.map(w => w.toFixed(6)).join(', ')}]`);

// Save weights
const outputPath = './src/cem-weights.json';
writeFileSync(outputPath, JSON.stringify(bestWeights, null, 2) + '\n');
console.log(`Weights saved to ${outputPath}`);
