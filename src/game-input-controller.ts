import { DecisionTree } from './decision-tree';
import { GameState } from './game-state';
import {
  DEFAULT_AUTO_TICK_MS, DEFAULT_MAX_TREE_DEPTH, GameInput, MIN_TICK_MS, RS,
} from './util';

export type InputHandler = (input: GameInput) => void;

export interface PlanningSomething {
  readonly x: number;
  readonly r: number;
  readonly isReady: boolean;
}

export function isPlanningSomething(obj: unknown): obj is PlanningSomething {
  return obj !== null && typeof obj === 'object' &&
    'isReady' in (obj as Record<string, unknown>);
}

export class PieceMove {
  constructor(public readonly x: number, public readonly r: number) {}
}

const SETUP_BINDINGS: Record<string, GameInput> = {
  'Escape': GameInput.reset,
  'p': GameInput.togglePause,
  'P': GameInput.togglePause,
  '+': GameInput.increaseSpeed,
  '=': GameInput.increaseSpeed,
  '-': GameInput.decreaseSpeed,
  '_': GameInput.decreaseSpeed,
};

export class GameInputController {
  private _inputHandlers: InputHandler[] = [];
  protected _isPaused = false;
  protected _tickIntervalMs = DEFAULT_AUTO_TICK_MS;

  constructor() {
    document.addEventListener('keydown', (e) => this.onKeyDown(e));
  }

  onKeyDown(e: KeyboardEvent): void {
    if (SETUP_BINDINGS[e.key] !== undefined) {
      this.input(SETUP_BINDINGS[e.key]);
    }
  }

  onInput(handler: InputHandler): void {
    this._inputHandlers.push(handler);
  }

  input(i: GameInput): void {
    for (const handler of this._inputHandlers) {
      handler(i);
    }
  }

  setPaused(isPaused: boolean): void {
    this._isPaused = isPaused;
    this.handlePausedChanged(isPaused);
  }

  changeSpeed(deltaMs: number): void {
    this._tickIntervalMs += deltaMs;
  }

  changeBoard(board: number[][], queue: number[]): void {
    this.handleBoardChanged(board, queue);
  }

  changePiece(x: number, y: number, r: number): void {
    this.handlePieceChanged(x, y, r);
  }

  gameStarted(): void {
    this.handleGameStarted();
  }

  gameEnded(): void {
    this.handleGameEnded();
  }

  // hooks for subclasses
  protected handlePausedChanged(_isPaused: boolean): void {}
  protected handleBoardChanged(_board: number[][], _queue: number[]): void {}
  protected handlePieceChanged(_x: number, _y: number, _r: number): void {}
  protected handleGameStarted(): void {}
  protected handleGameEnded(): void {}
}

export class AIInput extends GameInputController implements PlanningSomething {
  private _state!: GameState;
  private _tree!: DecisionTree;
  private _depth: number;
  private _tickTimer: number | null = null;
  private _paused = false;

  constructor(depth?: number) {
    super();
    this._depth = depth ?? DEFAULT_MAX_TREE_DEPTH;
  }

  get x(): number { return this._tree.x; }
  get r(): number { return this._tree.r; }
  get isReady(): boolean { return this._tree?.valid ?? false; }

  protected handlePausedChanged(isPaused: boolean): void {
    this._paused = isPaused;
    if (isPaused) {
      this._cancelTick();
    } else {
      this._scheduleTick();
    }
  }

  protected handleBoardChanged(board: number[][], queue: number[]): void {
    this._state = new GameState(board, queue);
    this._tree = DecisionTree.head(board, queue, this._depth);
  }

  protected handlePieceChanged(x: number, y: number, r: number): void {
    this._state.updatePiece(x, y, r);
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
    if (!this._isPaused && this._tree && this._tree.valid) {
      if (this._state.r % RS.length !== this._tree.r) {
        this.input(GameInput.rotatePiece);
      } else if (this._state.x > this._tree.x) {
        this.input(GameInput.movePieceLeft);
      } else if (this._state.x < this._tree.x) {
        this.input(GameInput.movePieceRight);
      } else {
        this.input(GameInput.dropPiece);
      }
    }
    this._scheduleTick();
  }
}
