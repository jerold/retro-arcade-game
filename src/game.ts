import { GameInputController } from './game-input-controller';
import { AIInput } from './game-input-controller';
import { GameRenderer, NoopRenderer } from './game-renderer';
import {
  DEFAULT_GAME_TICK_MS, GameInput, MIN_TICK_MS, MS_INC, SeededBag,
  boardWithLinesSquashed, boardWithPiece, emptyBoard,
  initialX, initialY, isValid, lineClears, maxValidY,
  scoreForLines,
} from './util';

export class Game {
  private _paused = false;
  private _tick_interval_ms = DEFAULT_GAME_TICK_MS;

  private _bag: SeededBag;
  private _b = emptyBoard();
  private _q: number[];
  private _lineClears: number[] = [];
  private _score = 0;
  get score(): number { return this._score; }

  private _highScore = 0;
  get highScore(): number { return this._highScore; }

  private _plays = 0;
  get plays(): number { return this._plays; }

  private get _i(): number { return this._q[0]; }
  private _y = 0;
  private _x = 0;
  private _r = 0;

  private _renderer: GameRenderer;
  private _controller: GameInputController;
  private _tickTimer: number | null = null;

  constructor(options?: { controller?: GameInputController; renderer?: GameRenderer; bag?: SeededBag }) {
    this._bag = options?.bag ?? new SeededBag();
    this._q = this._bag.freshQueue();
    this._controller = options?.controller ?? new AIInput();
    this._controller.onInput((input) => this._handleInput(input));

    this._renderer = options?.renderer ?? new NoopRenderer();
    this._renderer.initializeBoard(this._b);
  }

  start(): void {
    this._reset();
    this._controller.gameStarted();
    if (!this._paused) {
      this._scheduleTick();
    }
  }

  private _resetPieceTransforms(): void {
    this._r = 0;
    this._x = initialX(this._i);
    this._y = initialY(this._i);
  }

  private _reset(): void {
    this._plays++;
    this._highScore = Math.max(this._score, this._highScore);
    this._score = 0;
    this._b = emptyBoard();
    this._q = this._bag.freshQueue();
    this._lineClears = [];
    this._resetPieceTransforms();
    this._controller.changeBoard(this._b, this._q);
    this._paint();
    this._scheduleTick();
  }

  private _paint(): void {
    this._renderer.paint(
      this._x, this._y, this._r, this._i,
      this._b, this._q, this._lineClears,
      this._score, this._highScore, this._controller,
    );
  }

  private _scheduleTick(): void {
    if (!this._paused) {
      if (this._tickTimer !== null) clearTimeout(this._tickTimer);
      this._tickTimer = window.setTimeout(
        () => this._tick(),
        Math.max(MIN_TICK_MS, this._tick_interval_ms),
      );
    }
  }

  private _tick(): void {
    if (this._tickTimer !== null) clearTimeout(this._tickTimer);
    this._squashLineClears();

    if (isValid(this._x, this._y + 1, this._r, this._i, this._b)) {
      this._y++;
    } else {
      this._b = boardWithPiece(this._x, this._y, this._r, this._i, this._b);
      this._updateScore();
      this._dequeue();
      this._enqueue();
      this._resetPieceTransforms();
      this._controller.changeBoard(boardWithLinesSquashed(this._b, this._lineClears), this._q);
      if (!isValid(this._x, this._y, this._r, this._i, this._b)) {
        console.log(`Game Ended! Final Score:${this._score}`);
        this._controller.gameEnded();
        this._reset();
        return;
      }
    }

    this._paint();
    this._scheduleTick();
  }

  private _updateScore(): void {
    this._lineClears = lineClears(this._b);
    if (this._lineClears.length > 0) {
      this._score += scoreForLines(this._lineClears.length);
    }
  }

  private _squashLineClears(): void {
    if (this._lineClears.length > 0) {
      this._b = boardWithLinesSquashed(this._b, this._lineClears);
      this._lineClears = [];
    }
  }

  private _enqueue(): void {
    this._q.push(this._bag.next());
  }

  private _dequeue(): void {
    this._q.splice(0, 1);
  }

  private _handleInput(input: GameInput): void {
    switch (input) {
      case GameInput.reset: this._reset(); break;
      case GameInput.dropPiece: this._dropPiece(); break;
      case GameInput.rotatePiece: this._rotatePiece(); break;
      case GameInput.movePieceLeft: this._movePieceLeft(); break;
      case GameInput.movePieceRight: this._movePieceRight(); break;
      case GameInput.movePieceDown: this._movePieceDown(); break;
      case GameInput.togglePause: this._togglePause(); break;
      case GameInput.increaseSpeed: this._changeSpeed(-MS_INC); break;
      case GameInput.decreaseSpeed: this._changeSpeed(MS_INC); break;
    }
    this._paint();
  }

  private _togglePause(): void {
    this._paused = !this._paused;
    if (this._paused) {
      if (this._tickTimer !== null) clearTimeout(this._tickTimer);
    } else {
      this._scheduleTick();
    }
    this._controller.setPaused(this._paused);
  }

  private _changeSpeed(deltaMs: number): void {
    this._tick_interval_ms += deltaMs;
    this._controller.changeSpeed(deltaMs);
  }

  private _dropPiece(): void {
    this._squashLineClears();
    this._y = maxValidY(this._x, this._y, this._r, this._i, this._b);
    this._controller.changePiece(this._x, this._y, this._r);
    this._tick();
  }

  private _rotatePiece(): void {
    if (isValid(this._x, this._y, this._r + 1, this._i, this._b)) {
      this._r++;
    } else if (isValid(this._x, this._y + 1, this._r + 1, this._i, this._b)) {
      this._r++;
      this._y++;
    } else if (isValid(this._x - 1, this._y, this._r + 1, this._i, this._b)) {
      this._r++;
      this._x--;
    } else if (isValid(this._x + 1, this._y, this._r + 1, this._i, this._b)) {
      this._r++;
      this._x++;
    } else if (isValid(this._x - 2, this._y, this._r + 1, this._i, this._b)) {
      this._r++;
      this._x -= 2;
    } else if (isValid(this._x + 2, this._y, this._r + 1, this._i, this._b)) {
      this._r++;
      this._x += 2;
    }
    this._controller.changePiece(this._x, this._y, this._r);
  }

  private _movePieceLeft(): void {
    if (isValid(this._x - 1, this._y, this._r, this._i, this._b)) {
      this._x--;
      this._controller.changePiece(this._x, this._y, this._r);
    }
  }

  private _movePieceRight(): void {
    if (isValid(this._x + 1, this._y, this._r, this._i, this._b)) {
      this._x++;
      this._controller.changePiece(this._x, this._y, this._r);
    }
  }

  private _movePieceDown(): void {
    if (isValid(this._x, this._y + 1, this._r, this._i, this._b)) {
      this._y++;
      this._controller.changePiece(this._x, this._y, this._r);
    }
  }
}
