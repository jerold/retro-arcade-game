# CEM Tetris Player Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a CEM-based computer player that uses Dellacherie-Thiery features to play Tetris side-by-side against the existing DecisionTree AI.

**Architecture:** Six Dellacherie-Thiery features extracted from board state, scored by a linear weighted sum, weights optimized offline via Cross-Entropy Method. Runtime player enumerates all valid placements, scores each, picks the best. No lookahead. Integrates via a new `CEMInput` controller class.

**Tech Stack:** TypeScript, Vite, existing board logic from `src/util.ts`

**Spec:** `docs/superpowers/specs/2026-04-11-cem-player-design.md`

---

## File Structure

```
src/
├── cem-features.ts      # NEW — 6 Dellacherie-Thiery feature extractors
├── cem-evaluator.ts     # NEW — enumerate placements, score, pick best
├── cem-weights.json     # NEW — trained weights (6 numbers)
├── game-input-controller.ts  # MODIFY — add CEMInput class
├── main.ts              # MODIFY — wire CVC to use CEMInput for player 2
train-cem.ts             # NEW — offline CLI training script
```

---

### Task 1: Dellacherie-Thiery Feature Extractors

**Files:**
- Create: `src/cem-features.ts`

- [ ] **Step 1: Create cem-features.ts with all 6 feature functions**

Create `src/cem-features.ts`:

```typescript
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
```

- [ ] **Step 2: Verify it compiles**

```bash
cd ~/Development/tetris
npx tsc --noEmit src/cem-features.ts
```

Expected: No errors.

- [ ] **Step 3: Commit**

```bash
cd ~/Development/tetris
git add src/cem-features.ts
git commit -m "feat: add Dellacherie-Thiery feature extractors for CEM player"
```

---

### Task 2: CEM Evaluator

**Files:**
- Create: `src/cem-evaluator.ts`

- [ ] **Step 1: Create cem-evaluator.ts**

Create `src/cem-evaluator.ts`:

```typescript
import {
  BOARD_X, PIECE_RS,
  isValid, maxValidY, boardWithPiece, boardWithLinesSquashed, lineClears,
} from './util';
import { extractFeatures } from './cem-features';

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
      // Check if piece can exist at the top in this column
      if (!isValid(x, 0, r, pieceIndex, board) &&
          !isValid(x, -1, r, pieceIndex, board) &&
          !isValid(x, -2, r, pieceIndex, board)) {
        continue;
      }

      // Find where it lands
      const startY = isValid(x, 0, r, pieceIndex, board) ? 0 :
                     isValid(x, -1, r, pieceIndex, board) ? -1 : -2;
      const landY = maxValidY(x, startY, r, pieceIndex, board);

      // Simulate placement
      const boardAfterPlace = boardWithPiece(x, landY, r, pieceIndex, board);

      // Clear lines
      const cleared = lineClears(boardAfterPlace);
      const boardAfterClear = cleared.length > 0
        ? boardWithLinesSquashed(boardAfterPlace, cleared)
        : boardAfterPlace;

      // Extract features from the board AFTER line clears
      // (except landingHeight and erodedCells which use pre-clear state)
      const features = extractFeatures(boardAfterPlace, x, landY, r, pieceIndex);

      // Features 3-5 should be computed on the post-clear board
      features[2] = (await import('./cem-features')).rowTransitions(boardAfterClear);
      features[3] = (await import('./cem-features')).colTransitions(boardAfterClear);
      features[4] = (await import('./cem-features')).holes(boardAfterClear);
      features[5] = (await import('./cem-features')).cumulativeWells(boardAfterClear);

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
```

Wait — the dynamic import with `await` won't work in a synchronous context. Let me fix that.

- [ ] **Step 1 (revised): Create cem-evaluator.ts**

Create `src/cem-evaluator.ts`:

```typescript
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
```

- [ ] **Step 2: Verify it compiles**

```bash
cd ~/Development/tetris
npx tsc --noEmit src/cem-evaluator.ts
```

Expected: No errors.

- [ ] **Step 3: Commit**

```bash
cd ~/Development/tetris
git add src/cem-evaluator.ts
git commit -m "feat: add CEM placement evaluator with weighted feature scoring"
```

---

### Task 3: CEM Training Script

**Files:**
- Create: `train-cem.ts`

- [ ] **Step 1: Create the training script**

Create `train-cem.ts` in the project root:

```typescript
/**
 * CEM Training Script — Cross-Entropy Method for Tetris weight optimization.
 * Run: npx tsx train-cem.ts
 * Output: writes optimized weights to src/cem-weights.json
 */

import { writeFileSync } from 'fs';
import {
  BOARD_X, BOARD_Y, EMPTY_VALUE, PIECE_RS,
  emptyBoard, pieceIndexFromBag, isValid, maxValidY,
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

// --- Headless game simulation ---

function simulateGame(weights: number[]): number {
  let board = emptyBoard();
  let totalLinesCleared = 0;

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

  while (true) {
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
```

- [ ] **Step 2: Install tsx as dev dependency (for running TypeScript CLI scripts)**

```bash
cd ~/Development/tetris
npm install --save-dev tsx
```

- [ ] **Step 3: Run the training**

```bash
cd ~/Development/tetris
npx tsx train-cem.ts
```

Expected: 30 generations of output showing improving scores. Takes 1-5 minutes. Final weights saved to `src/cem-weights.json`.

- [ ] **Step 4: Verify the weights file**

```bash
cat src/cem-weights.json
```

Expected: Array of 6 numbers. Most should be negative (penalties) except erodedCells (positive, index 1). Similar shape to Dellacherie's: `[-4.5, 3.4, -3.2, -9.3, -7.9, -3.4]`.

- [ ] **Step 5: Commit**

```bash
cd ~/Development/tetris
git add train-cem.ts src/cem-weights.json
git commit -m "feat: add CEM training script and initial trained weights"
```

---

### Task 4: CEMInput Controller

**Files:**
- Modify: `src/game-input-controller.ts`

- [ ] **Step 1: Add CEMInput class**

Add these imports at the top of `src/game-input-controller.ts`:

```typescript
import { evaluateBestPlacement } from './cem-evaluator';
import cemWeights from './cem-weights.json';
```

Add the `CEMInput` class at the bottom of the file, after the `AIInput` class:

```typescript
export class CEMInput extends GameInputController implements PlanningSomething {
  private _targetX = 0;
  private _targetR = 0;
  private _currentX = 0;
  private _currentR = 0;
  private _ready = false;
  private _tickTimer: number | null = null;
  private _paused = false;

  get x(): number { return this._targetX; }
  get r(): number { return this._targetR; }
  get isReady(): boolean { return this._ready; }

  protected handlePausedChanged(isPaused: boolean): void {
    this._paused = isPaused;
    if (isPaused) {
      this._cancelTick();
    } else {
      this._scheduleTick();
    }
  }

  protected handleBoardChanged(board: number[][], queue: number[]): void {
    const pieceIndex = queue[0];
    const placement = evaluateBestPlacement(board, pieceIndex, cemWeights as number[]);
    if (placement) {
      this._targetX = placement.x;
      this._targetR = placement.rotation;
      this._ready = true;
    } else {
      this._ready = false;
    }
  }

  protected handlePieceChanged(x: number, _y: number, r: number): void {
    this._currentX = x;
    this._currentR = r % RS.length;
  }

  protected handleGameStarted(): void {
    this._scheduleTick();
  }

  private _scheduleTick(): void {
    if (!this._paused) {
      this._cancelTick();
      this._tickTimer = window.setTimeout(
        () => this._tick(),
        Math.max(MIN_TICK_MS, this._tickIntervalMs),
      );
    }
  }

  private _cancelTick(): void {
    if (this._tickTimer !== null) {
      clearTimeout(this._tickTimer);
      this._tickTimer = null;
    }
  }

  private _tick(): void {
    if (!this._isPaused && this._ready) {
      if (this._currentR !== this._targetR) {
        this.input(GameInput.rotatePiece);
      } else if (this._currentX > this._targetX) {
        this.input(GameInput.movePieceLeft);
      } else if (this._currentX < this._targetX) {
        this.input(GameInput.movePieceRight);
      } else {
        this.input(GameInput.dropPiece);
      }
    }
    this._scheduleTick();
  }
}
```

- [ ] **Step 2: Add the RS import if not already present**

The `RS` import should already be in the imports at the top of the file. Verify this line exists:

```typescript
import {
  DEFAULT_AUTO_TICK_MS, DEFAULT_MAX_TREE_DEPTH, GameInput, MIN_TICK_MS, RS,
} from './util';
```

- [ ] **Step 3: Enable JSON imports in tsconfig**

Check `tsconfig.json` and ensure `resolveJsonModule` and `esModuleInterop` are enabled:

```json
{
  "compilerOptions": {
    "resolveJsonModule": true,
    "esModuleInterop": true
  }
}
```

If these are missing, add them to the `compilerOptions` section.

- [ ] **Step 4: Verify it compiles**

```bash
cd ~/Development/tetris
npx tsc --noEmit
```

Expected: No errors.

- [ ] **Step 5: Commit**

```bash
cd ~/Development/tetris
git add src/game-input-controller.ts tsconfig.json
git commit -m "feat: add CEMInput controller using trained weights"
```

---

### Task 5: Wire CVC Mode — DecisionTree vs CEM

**Files:**
- Modify: `src/main.ts`

- [ ] **Step 1: Import CEMInput and update CVC mode**

In `src/main.ts`, add `CEMInput` to the import:

```typescript
import { AIInput, CEMInput } from './game-input-controller';
```

Then update the CVC case to use `CEMInput` for player 2:

```typescript
    case CVC:
      games.push(
        new Game({ renderer: new WebRenderer('#game-1') }),
        new Game({ controller: new CEMInput(), renderer: new WebRenderer('#game-2') }),
      );
      game1.style.display = 'flex';
      game2.style.display = 'flex';
      break;
```

This makes CVC mode: Game 1 = DecisionTree (default AIInput, depth 2), Game 2 = CEM player.

- [ ] **Step 2: Verify it compiles and runs**

```bash
cd ~/Development/tetris
npm run start
```

Navigate to `http://localhost:5173/#/cvc` in the browser. You should see two boards playing side-by-side: left = DecisionTree, right = CEM.

- [ ] **Step 3: Watch them play and verify CEM is making different decisions**

The CEM player should:
- Make placement decisions without visible "thinking" delay (no tree recursion)
- Tend to build flatter, avoid holes, and avoid deep wells
- Play differently from the DecisionTree AI (different placement choices)

If both are playing identically, something is wrong with the weights or evaluator.

- [ ] **Step 4: Commit**

```bash
cd ~/Development/tetris
git add src/main.ts
git commit -m "feat: wire CVC mode to pit DecisionTree vs CEM player side-by-side"
```

---

### Task 6: End-to-End Verification

**Files:** None (testing only)

- [ ] **Step 1: Run CVC mode and observe**

```bash
cd ~/Development/tetris
npm run start
```

Open `http://localhost:5173/#/cvc`. Let both AIs play for a few minutes. Compare:
- Score progression (which AI scores higher?)
- Board shape (CEM should be flatter, fewer holes)
- Play style (CEM has no lookahead but better features; DecisionTree has lookahead but simpler features)

- [ ] **Step 2: Verify other modes still work**

Test each mode still functions:
- `/#/p1` — human player
- `/#/c1` — single AI
- `/#/pvp` — two humans
- `/#/pvc` — human vs AI

All should work unchanged.

- [ ] **Step 3: Optional — retrain with more generations if CEM underperforms**

If the CEM player is clearly worse than DecisionTree, try retraining with more generations or population:

Edit `train-cem.ts`: change `GENERATIONS = 50` and `POPULATION = 200`, then:

```bash
npx tsx train-cem.ts
```

The new weights will overwrite `src/cem-weights.json`. Restart the dev server to pick them up.

- [ ] **Step 4: Final commit**

```bash
cd ~/Development/tetris
git add -A
git commit -m "feat: complete CEM Tetris player — trained and playing side-by-side"
```
