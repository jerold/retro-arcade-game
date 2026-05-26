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
  private _touches = new Map<number, { x: number; y: number }>();
  private _inverted: boolean;

  constructor(pieceBindings: Record<string, GameInput>, touchTarget?: HTMLElement, inverted = false) {
    super();
    this._pieceBindings = pieceBindings;
    this._inverted = inverted;

    const el = touchTarget ?? document;
    el.addEventListener('touchstart', (e) => this._onTouchStart(e as TouchEvent), { passive: true });
    el.addEventListener('touchmove', (e) => this._onTouchMove(e as TouchEvent), { passive: true });
    el.addEventListener('touchend', (e) => this._onTouchEnd(e as TouchEvent), { passive: true });
  }

  static playerOne(touchTarget?: HTMLElement, inverted = false): UserInput {
    return new UserInput(PLAYER_ONE_BINDINGS, touchTarget, inverted);
  }

  static playerTwo(touchTarget?: HTMLElement, inverted = false): UserInput {
    return new UserInput(PLAYER_TWO_BINDINGS, touchTarget, inverted);
  }

  onKeyDown(e: KeyboardEvent): void {
    if (this._pieceBindings[e.key] !== undefined) {
      this.input(this._pieceBindings[e.key]);
    } else {
      super.onKeyDown(e);
    }
  }

  private _onTouchStart(e: TouchEvent): void {
    for (let i = 0; i < e.changedTouches.length; i++) {
      const t = e.changedTouches[i];
      this._touches.set(t.identifier, { x: t.clientX, y: t.clientY });
    }
  }

  private _onTouchMove(e: TouchEvent): void {
    const flip = this._inverted ? -1 : 1;
    for (let i = 0; i < e.changedTouches.length; i++) {
      const t = e.changedTouches[i];
      const start = this._touches.get(t.identifier);
      if (!start) continue;

      const dx = (t.clientX - start.x) * flip;
      const dy = (t.clientY - start.y) * flip;
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
          this._touches.set(t.identifier, { x: t.clientX, y: t.clientY });
        }
      }
    }
  }

  private _onTouchEnd(e: TouchEvent): void {
    const flip = this._inverted ? -1 : 1;
    for (let i = 0; i < e.changedTouches.length; i++) {
      const t = e.changedTouches[i];
      const start = this._touches.get(t.identifier);
      if (!start) continue;

      const dx = (t.clientX - start.x) * flip;
      const dy = (t.clientY - start.y) * flip;
      const dist = Math.hypot(dx, dy);

      if (dist > 40) {
        if (Math.abs(dy) > Math.abs(dx)) {
          if (dy > 0) {
            this.input(GameInput.dropPiece);
          }
        }
      }

      this._touches.delete(t.identifier);
    }
  }
}
