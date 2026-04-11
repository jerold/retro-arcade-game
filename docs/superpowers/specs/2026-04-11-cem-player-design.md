# CEM Tetris Player — Design Spec

*April 11, 2026*

## Overview

Add a second computer player that uses the Cross-Entropy Method (CEM) with Dellacherie-Thiery features to play Tetris. The CEM player evaluates all valid placements using a 6-feature linear scoring function with weights optimized offline via evolutionary training. It plays side-by-side against the existing DecisionTree AI in CVC mode.

## Goals

- Implement the 6 Dellacherie-Thiery board features
- Build a linear evaluator that picks optimal placements without lookahead
- Train weights offline via CEM (CLI script, ~30 generations)
- Integrate as a new player type alongside the existing AI
- Play side-by-side in CVC mode: DecisionTree vs CEM

## Architecture

Two new runtime modules (features + evaluator), one offline training script, one weights file. Integration via a new `CEMInput` controller that plugs into the existing `GameInput` interface.

```
Runtime:  board state → cem-features.ts → 6 numbers → cem-evaluator.ts → (rotation, x)
Training: train-cem.ts → plays N games per weight vector → evolves → cem-weights.json
```

## New Files

### `src/cem-features.ts` — Feature Extractors

Six functions, each takes a board (2D number array) and returns a number:

**1. `landingHeight(board, piece, rotation, y)`**
Row where the piece lands. Specifically: the height of the center of the piece after placement. Lower placement = better. Returns a value from 0 (bottom) to 23 (top).

**2. `erodedCells(board, piece, rotation, y)`**
`linesCleared * cellsOfPieceInClearedLines`. This rewards placements where the piece itself participates in line clears. A Tetris where all 4 cells are in cleared lines scores higher than one where 1 cell is in a cleared line.

**3. `rowTransitions(board)`**
Count of horizontal transitions (filled↔empty) across all rows. Each row is bounded by filled walls on both sides. A full row has 0 transitions. A row with scattered gaps has many. Lower = better.

**4. `colTransitions(board)`**
Count of vertical transitions (filled↔empty) down each column. The floor counts as filled. A column with a hole has at least 2 extra transitions. Lower = better.

**5. `holes(board)`**
Count of empty cells that have at least one filled cell above them in the same column. These are unreachable without clearing lines above. Lower = better.

**6. `cumulativeWells(board)`**
For each column, a well exists if both adjacent columns (or wall) are higher. Well depth = how many consecutive cells deep the well goes. Cumulative wells = sum of `depth * (depth + 1) / 2` for all wells (deeper wells penalized more). Lower = better.

### `src/cem-evaluator.ts` — Placement Evaluator

**Input:** board, current piece index, weights (6 floats)

**Process:**
1. Enumerate all valid placements: for each rotation (0 to piece's max rotations), for each x position, find the y position where the piece lands (drop simulation)
2. For each valid placement:
   a. Clone the board
   b. Place the piece on the clone
   c. Clear any complete lines
   d. Extract the 6 features from the resulting board
   e. Compute `score = sum(weights[i] * features[i])`
3. Return the placement (rotation, x) with the highest score

**Output:** `{ rotation: number, x: number }`

**Interface:**
```typescript
interface CEMPlacement {
  rotation: number;
  x: number;
}

function evaluateBestPlacement(
  board: number[][],
  pieceIndex: number,
  weights: number[]
): CEMPlacement;
```

Uses the existing `pieces` array, `isValid()`, and `lineClears()` from `util.ts`.

### `src/cem-weights.json` — Trained Weights

Array of 6 numbers, output of training. Example (Dellacherie's original hand-tuned weights for reference):
```json
[-4.500158825082766, 3.4181268101392694, -3.2178882868487753, -9.348695305445199, -7.899265427351652, -3.3855972247263626]
```

Order: [landingHeight, erodedCells, rowTransitions, colTransitions, holes, cumulativeWells].

Note: Most weights are negative (penalizing bad features). `erodedCells` is positive (rewarding line clears with piece participation).

### `train-cem.ts` — Offline CEM Trainer

**CLI script** run via `npx ts-node train-cem.ts` or `npx tsx train-cem.ts`.

**Algorithm:**
1. Initialize: mean = [0, 0, 0, 0, 0, 0], std = [1, 1, 1, 1, 1, 1]
2. For each generation (30 total):
   a. Sample 100 weight vectors from N(mean, std)
   b. For each vector, play a full game (headless — no rendering, using board logic from `util.ts`)
   c. Record total lines cleared per game
   d. Sort by lines cleared, keep top 10 (elite)
   e. New mean = mean of elite weights
   f. New std = std of elite weights (with floor of 0.01 to prevent collapse)
   g. Log: generation number, best lines, mean lines, best weights
3. Save best weights to `src/cem-weights.json`

**Headless game simulation:** Uses `util.ts` board logic directly — `isValid()`, `lineClears()`, `boardWithLinesSquashed()`, piece definitions, bag randomizer. No rendering, no timing, no input controller. Pure game logic at maximum speed.

**Training parameters:**
- Generations: 30
- Population: 100
- Elite fraction: 10%
- Std floor: 0.01
- Games per evaluation: 1 (can increase for less variance but slower training)

**Expected training time:** 1-5 minutes on CPU (30 generations × 100 games each = 3,000 games, each running until game over).

### Integration Changes

**`src/game-input-controller.ts`** — Add `CEMInput` class:
- Similar structure to `AIInput`
- On `changeBoard()`: calls `evaluateBestPlacement()` with current board, piece, and loaded weights
- `_tick()`: executes rotations then movements to reach target placement, then drops
- Same tick timing as `AIInput` (320ms default)

**`src/main.ts`** — Modify CVC mode:
- Game 1: `AIInput` with `DecisionTree` (existing, depth=2)
- Game 2: `CEMInput` with CEM evaluator
- Both play simultaneously, side-by-side
- Independent piece queues (existing behavior)

## What Stays Unchanged

- Board representation (10x24 2D array)
- Piece definitions and rotations
- `isValid()`, `lineClears()`, `boardWithLinesSquashed()`
- Scoring system (40/100/300/1200)
- Rendering (WebRenderer)
- Queue system (bag randomizer)
- User input handling
- P1, C1, PVP, PVC game modes

## Dependencies

- `ts-node` or `tsx` for running the training script (dev dependency, likely already available)
- No new runtime dependencies

## Out of Scope

- In-browser training visualization
- PPO/DQN approaches (future work)
- Modifying the existing DecisionTree AI
- Per-seat or shared piece queues between players
- Real-time speed constraints
