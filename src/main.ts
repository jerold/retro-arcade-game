import { Game } from './game';
import { AIInput, CEMInput } from './game-input-controller';
import { UserInput } from './user-input';
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
        new Game({ controller: UserInput.playerOne(), renderer: new WebRenderer('#game-1') }),
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
    case PVP:
      games.push(
        new Game({ controller: UserInput.playerOne(), renderer: new WebRenderer('#game-2') }),
        new Game({ controller: UserInput.playerTwo(), renderer: new WebRenderer('#game-1') }),
      );
      game1.style.display = 'flex';
      game2.style.display = 'flex';
      break;
    case PVC:
      games.push(
        new Game({ controller: UserInput.playerOne(), renderer: new WebRenderer('#game-1') }),
        new Game({ renderer: new WebRenderer('#game-2') }),
      );
      game1.style.display = 'flex';
      game2.style.display = 'flex';
      break;
    case C2:
      games.push(
        new Game({ controller: new CEMInput(), renderer: new WebRenderer('#game-1') }),
      );
      game1.style.display = 'flex';
      game2.style.display = 'none';
      break;
    case CVC:
      games.push(
        new Game({ renderer: new WebRenderer('#game-1') }),
        new Game({ controller: new CEMInput(), renderer: new WebRenderer('#game-2') }),
      );
      game1.style.display = 'flex';
      game2.style.display = 'flex';
      break;
    default:
      window.location.hash = `#/${P1}`;
      setMode();
      return;
  }

  games.forEach(game => game.start());
}

setMode();
