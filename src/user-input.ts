import { GameInputController } from './game-input-controller';
import { GameInput } from './util';

const PLAYER_ONE_BINDINGS: Record<string, GameInput> = {
  'Enter': GameInput.dropPiece,
  'ArrowUp': GameInput.rotatePiece,
  'ArrowLeft': GameInput.movePieceLeft,
  'ArrowRight': GameInput.movePieceRight,
  'ArrowDown': GameInput.movePieceDown,
};

const PLAYER_TWO_BINDINGS: Record<string, GameInput> = {
  ' ': GameInput.dropPiece,
  'w': GameInput.rotatePiece,
  'W': GameInput.rotatePiece,
  'a': GameInput.movePieceLeft,
  'A': GameInput.movePieceLeft,
  'd': GameInput.movePieceRight,
  'D': GameInput.movePieceRight,
  's': GameInput.movePieceDown,
  'S': GameInput.movePieceDown,
};

export class UserInput extends GameInputController {
  private _pieceBindings: Record<string, GameInput>;
  private _startTouch: { x: number; y: number } | null = null;
  private _endTouch: { x: number; y: number } | null = null;

  constructor(pieceBindings: Record<string, GameInput>) {
    super();
    this._pieceBindings = pieceBindings;

    if (pieceBindings === PLAYER_ONE_BINDINGS) {
      document.addEventListener('touchstart', (e) => this._onTouchStart(e), { passive: true });
      document.addEventListener('touchmove', (e) => this._onTouchMove(e), { passive: true });
      document.addEventListener('touchend', (e) => this._onTouchEnd(e), { passive: true });
    }
  }

  static playerOne(): UserInput {
    return new UserInput(PLAYER_ONE_BINDINGS);
  }

  static playerTwo(): UserInput {
    return new UserInput(PLAYER_TWO_BINDINGS);
  }

  onKeyDown(e: KeyboardEvent): void {
    if (this._pieceBindings[e.key] !== undefined) {
      this.input(this._pieceBindings[e.key]);
    } else {
      super.onKeyDown(e);
    }
  }

  private _onTouchStart(e: TouchEvent): void {
    const touch = e.touches[0];
    this._startTouch = { x: touch.clientX, y: touch.clientY };
    this._endTouch = { x: touch.clientX, y: touch.clientY };
  }

  private _onTouchMove(e: TouchEvent): void {
    const touch = e.touches[0];
    this._endTouch = { x: touch.clientX, y: touch.clientY };

    if (!this._startTouch || !this._endTouch) return;

    const dx = this._endTouch.x - this._startTouch.x;
    const dy = this._endTouch.y - this._startTouch.y;
    const dist = Math.hypot(dx, dy);

    if (dist > 40) {
      let moved = false;
      if (Math.abs(dy) > Math.abs(dx)) {
        if (dy < 0) {
          this.input(GameInput.rotatePiece);
          moved = true;
        }
      } else {
        if (dx > 0) {
          this.input(GameInput.movePieceRight);
        } else {
          this.input(GameInput.movePieceLeft);
        }
        moved = true;
      }
      if (moved) {
        this._startTouch = this._endTouch;
      }
    }
  }

  private _onTouchEnd(_e: TouchEvent): void {
    if (!this._startTouch || !this._endTouch) return;

    const dx = this._endTouch.x - this._startTouch.x;
    const dy = this._endTouch.y - this._startTouch.y;
    const dist = Math.hypot(dx, dy);

    if (dist > 40) {
      if (Math.abs(dy) > Math.abs(dx)) {
        if (dy > 0) {
          this.input(GameInput.dropPiece);
        }
      }
    }
  }
}
