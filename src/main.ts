import { Game } from './game';
import { AIInput } from './game-input-controller';
import { UserInput } from './user-input';
import { WebRenderer } from './web-renderer';

const P1 = 'p1';
const C1 = 'c1';
const PVP = 'pvp';
const PVC = 'pvc';
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
    case CVC:
      games.push(
        new Game({ renderer: new WebRenderer('#game-1') }),
        new Game({ controller: new AIInput(1), renderer: new WebRenderer('#game-2') }),
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
