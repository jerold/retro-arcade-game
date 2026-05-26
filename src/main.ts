import { Game } from './game';
import { AIInput, CEMInput } from './game-input-controller';
import { UserInput } from './user-input';
import { SeededBag } from './util';
import { WebRenderer } from './web-renderer';

function initTheme(): void {
  const toggle = document.getElementById('theme-toggle')!;
  const saved = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (saved === 'dark' || (!saved && prefersDark)) {
    document.body.classList.add('dark');
  }

  function updateIcon(): void {
    toggle.textContent = document.body.classList.contains('dark') ? '\u2600\uFE0F' : '\uD83C\uDF19';
  }
  updateIcon();

  toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
    updateIcon();
  });
}

initTheme();

function initModeButtons(): void {
  const modes = ['p1', 'c1', 'c2'] as const;
  const hash = window.location.hash.replace('#/', '');

  for (const mode of modes) {
    const btn = document.getElementById(`mode-${mode}`)!;
    if (hash === mode) btn.classList.add('active');
    btn.addEventListener('click', () => {
      window.location.hash = `#/${mode}`;
      location.reload();
    });
  }

  document.getElementById('speed-up')!.addEventListener('click', () => {
    document.dispatchEvent(new KeyboardEvent('keydown', { key: '+' }));
  });
  document.getElementById('speed-down')!.addEventListener('click', () => {
    document.dispatchEvent(new KeyboardEvent('keydown', { key: '-' }));
  });
}

initModeButtons();

const P1 = 'p1';
const C1 = 'c1';
const PVP = 'pvp';
const PVC = 'pvc';
const C2 = 'c2';
const CVC = 'cvc';

const games: Game[] = [];

function setMode(): void {
  const hash = window.location.hash.replace('#/', '');

  const game1 = document.querySelector('#game-1') as HTMLElement;
  const game2 = document.querySelector('#game-2') as HTMLElement;

  switch (hash) {
    case P1:
      games.push(
        new Game({ controller: UserInput.playerOne(game1), renderer: new WebRenderer('#game-1') }),
      );
      game1.style.display = 'flex';
      game2.style.display = 'none';
      break;
    case C1:
      games.push(
        new Game({ renderer: new WebRenderer('#game-1') }),
      );
      game1.style.display = 'flex';
      game2.style.display = 'none';
      break;
    case PVP: {
      const seed = Math.random() * 0xFFFFFFFF;
      const isMob = window.matchMedia('(max-width: 600px)').matches;
      games.push(
        new Game({ controller: UserInput.playerOne(game2), bag: new SeededBag(seed), renderer: new WebRenderer('#game-2') }),
        new Game({ controller: UserInput.playerTwo(game1, isMob), bag: new SeededBag(seed), renderer: new WebRenderer('#game-1') }),
      );
      game1.style.display = 'flex';
      game2.style.display = 'flex';
      break;
    }
    case PVC: {
      const seed = Math.random() * 0xFFFFFFFF;
      const isMob = window.matchMedia('(max-width: 600px)').matches;
      games.push(
        new Game({ controller: UserInput.playerOne(game1, isMob), bag: new SeededBag(seed), renderer: new WebRenderer('#game-1') }),
        new Game({ bag: new SeededBag(seed), renderer: new WebRenderer('#game-2') }),
      );
      game1.style.display = 'flex';
      game2.style.display = 'flex';
      break;
    }
    case C2:
      games.push(
        new Game({ controller: new CEMInput(), renderer: new WebRenderer('#game-1') }),
      );
      game1.style.display = 'flex';
      game2.style.display = 'none';
      break;
    case CVC: {
      const seed = Math.random() * 0xFFFFFFFF;
      games.push(
        new Game({ bag: new SeededBag(seed), renderer: new WebRenderer('#game-1') }),
        new Game({ controller: new CEMInput(), bag: new SeededBag(seed), renderer: new WebRenderer('#game-2') }),
      );
      game1.style.display = 'flex';
      game2.style.display = 'flex';
      break;
    }
    default:
      window.location.hash = `#/${P1}`;
      setMode();
      return;
  }

  const isDual = [PVP, PVC, CVC].includes(hash);
  const isMobile = window.matchMedia('(max-width: 600px)').matches;
  if (isDual && isMobile) {
    document.body.classList.add('dual-mobile');
  }

  games.forEach(game => game.start());

  if (isDual && isMobile) {
    requestAnimationFrame(() => {
      const availH = window.innerHeight / 2;
      for (const c of [game1, game2]) {
        const board = c.querySelector('#board') as HTMLElement;
        if (!board) continue;
        const scale = Math.min((availH - 40) / board.offsetHeight, (window.innerWidth - 80) / board.offsetWidth, 1);
        if (scale < 1) {
          (board.style as any).zoom = `${scale}`;
        }
      }
    });
  }
}

setMode();
