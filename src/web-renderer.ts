import { GameInputController, isPlanningSomething } from './game-input-controller';
import { GameRenderer } from './game-renderer';
import {
  BOARD_X, BOARD_Y, PREDICT_VALUE,
  SHADOW_VALUE, boardCopy, maxValidY, merged, pieceMask, pieces, sameLists,
} from './util';

const SCORE_BOUNCE_CLASS = 'bounce-score';

function pixelClassName(pixel: number, queuePixel = false): string {
  switch (pixel) {
    case 0: return queuePixel ? 'q-empty' : 'empty';
    case -1: return 'shadow';
    case -2: return 'predict';
    default: return `piece-${pixel}`;
  }
}

function pieceSizeClassName(size: number): string {
  switch (size) {
    case 2: return 'x2';
    case 4: return 'x4';
    default: return 'x3';
  }
}

function arrayAsInnerHtml(board: number[][]): string {
  return board.flatMap(row => row.map(pixel =>
    `<div class="pixel ${pixelClassName(pixel)}"></div>`
  )).join('');
}

export class WebRenderer implements GameRenderer {
  private _selectorId: string;
  private _previousQ: number[] = [];

  constructor(selectorId: string) {
    this._selectorId = selectorId;
  }

  private get _parentElement(): HTMLElement {
    return document.querySelector(this._selectorId) as HTMLElement;
  }
  private get _boardElement(): HTMLElement {
    return this._parentElement.querySelector('#board') as HTMLElement;
  }
  private get _scoreElement(): HTMLElement {
    return this._parentElement.querySelector('#score') as HTMLElement;
  }
  private get _highScoreElement(): HTMLElement {
    return this._parentElement.querySelector('#high-score') as HTMLElement;
  }
  private get _queueElements(): HTMLElement[] {
    return [
      this._parentElement.querySelector('#q1') as HTMLElement,
      this._parentElement.querySelector('#q2') as HTMLElement,
      this._parentElement.querySelector('#q3') as HTMLElement,
    ];
  }

  initializeBoard(b: number[][]): void {
    if (!this._parentElement) {
      throw new Error(`Unable to find component to mount Game into "${this._selectorId}"`);
    }

    this._parentElement.innerHTML = `
<div id="board"></div>
<div id="score"></div>
<div id="high-score"></div>
<div class="queue">
    <div id="q1"></div>
    <div id="q2"></div>
    <div id="q3"></div>
</div>`;

    this._boardElement.innerHTML = arrayAsInnerHtml(b);
  }

  paint(
    x: number, y: number, r: number, i: number,
    b: number[][], q: number[], c: number[],
    s: number, hs: number,
    controller: GameInputController,
  ): void {
    let composite = boardCopy(b);
    const queue = [...q];

    if (isPlanningSomething(controller) && controller.isReady) {
      const predictY = maxValidY(controller.x, y, controller.r, i, b);
      composite = merged(composite, boardCopy(pieceMask(controller.x, predictY, controller.r, i), PREDICT_VALUE));
    }

    const shadowY = maxValidY(x, y, r, i, b);
    composite = merged(composite, boardCopy(pieceMask(x, shadowY, r, i), SHADOW_VALUE));
    composite = merged(composite, pieceMask(x, y, r, i));

    const pixels = composite.flat();
    const divs = this._boardElement.children;

    const linesWithClears: boolean[] = [];
    for (let py = 0; py < BOARD_Y; py++) {
      for (let px = 0; px < BOARD_X; px++) {
        linesWithClears.push(c.includes(py));
      }
    }

    for (let j = 0; j < divs.length; j++) {
      (divs[j] as HTMLElement).className = `pixel ${pixelClassName(pixels[j])} ${linesWithClears[j] ? 'remove' : ''}`;
    }

    this._paintScore(s, hs);
    this._paintQueue(queue);
  }

  private async _paintScore(s: number, hs: number): Promise<void> {
    const scoreText = `Score: ${s}`;
    if (this._scoreElement.textContent !== scoreText) {
      this._scoreElement.textContent = scoreText;
      if (s !== 0 && !this._scoreElement.classList.contains(SCORE_BOUNCE_CLASS)) {
        this._scoreElement.classList.add(SCORE_BOUNCE_CLASS);
        await new Promise(resolve => setTimeout(resolve, 400));
        this._scoreElement.classList.remove(SCORE_BOUNCE_CLASS);
      }
    }

    const highScoreText = `Highest: ${hs}`;
    if (hs !== 0 && this._highScoreElement.textContent !== highScoreText) {
      this._highScoreElement.textContent = highScoreText;
      if (!this._highScoreElement.classList.contains(SCORE_BOUNCE_CLASS)) {
        this._highScoreElement.classList.add(SCORE_BOUNCE_CLASS);
        await new Promise(resolve => setTimeout(resolve, 400));
        this._highScoreElement.classList.remove(SCORE_BOUNCE_CLASS);
      }
    }
  }

  private _paintQueue(q: number[]): void {
    if (!sameLists(q, this._previousQ)) {
      for (let i = 0; i < this._queueElements.length; i++) {
        this._paintQueuePiece(i, q);
      }
    }
    this._previousQ = q;
  }

  private _paintQueuePiece(i: number, q: number[]): void {
    const element = this._queueElements[i];
    const piece = pieces[q[i + 1]];

    element.className = `on-deck ${pieceSizeClassName(piece.length)}`;
    element.innerHTML = arrayAsInnerHtml(piece);

    const pixels = piece.flat();
    const divs = element.children;
    for (let j = 0; j < divs.length; j++) {
      (divs[j] as HTMLElement).className = `pixel ${pixelClassName(pixels[j], true)}`;
    }
  }
}
