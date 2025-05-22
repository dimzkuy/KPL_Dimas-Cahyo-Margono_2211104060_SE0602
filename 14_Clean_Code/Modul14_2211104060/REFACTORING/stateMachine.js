// stateMachine.js

const readline = require('readline');
const GameState = require('./gameState');

/**
 * Interface untuk membaca input dari command line
 */
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let currentState = GameState.START;

/**
 * Menjalankan mesin status game
 */
function runStateMachine() {
  console.log(`${currentState} SCREEN`);

  rl.question('Enter Command: ', (command) => {
    switch (currentState) {
      case GameState.START:
        if (command === 'PLAY') {
          currentState = GameState.PLAYING;
        } else if (command === 'EXIT') {
          currentState = GameState.EXIT;
        }
        break;

      case GameState.PLAYING:
        if (command === 'LOSE') {
          currentState = GameState.GAME_OVER;
        }
        break;

      case GameState.GAME_OVER:
        if (command === 'RESTART') {
          currentState = GameState.START;
        } else if (command === 'EXIT') {
          currentState = GameState.EXIT;
        }
        break;

      default:
        break;
    }

    if (currentState !== GameState.EXIT) {
      runStateMachine();
    } else {
      console.log('EXIT SCREEN');
      rl.close();
    }
  });
}

runStateMachine();
