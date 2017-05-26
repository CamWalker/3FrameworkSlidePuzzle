export const MOVE_TILE = 'MOVE_TILE';
export const START_GAME = 'START_GAME';

function shuffle(a) {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
  return a;
}

function validBoard (arr) {
  let inversions = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j] && arr[j] !== 0) {
        inversions++;
      }
    }
  }
  return inversions % 2 === 0
}

export function startGame() {
  let board = shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8]);
  while(!validBoard(board)) {
    board = shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8]);
  }
  board = [[board[0], board[1], board[2]],
          [board[3], board[4], board[5]],
          [board[6], board[7], board[8]]];
  return {
    type: START_GAME,
    payload: board
  }
}

export function moveTile(x, y, game, id) {
  game.direction = '';
  if (game.board[y][x + 1] === 0) {
    game.board[y][x + 1] = game.board[y][x];
    game.board[y][x] = 0;
    game.direction = 'left'
  } else if (game.board[y][x + 2] === 0) {
    game.board[y][x + 2] = game.board[y][x + 1];
    game.board[y][x + 1] = game.board[y][x];
    game.board[y][x] = 0;
    game.direction = 'left'
  }

  if (game.board[y][x - 1] === 0) {
    game.board[y][x - 1] = game.board[y][x];
    game.board[y][x] = 0;
    game.direction = 'right'
  } else if (game.board[y][x - 2] === 0) {
    game.board[y][x - 2] = game.board[y][x - 1];
    game.board[y][x - 1] = game.board[y][x];
    game.board[y][x] = 0;
    game.direction = 'right'
  }

  if(game.board[y + 1]) {
    if (game.board[y + 1][x] === 0) {
      game.board[y + 1][x] = game.board[y][x];
      game.board[y][x] = 0;
      game.direction = 'down'
    } else if (game.board[y + 2]) {
      if (game.board[y + 2][x] === 0) {
        game.board[y + 2][x] = game.board[y + 1][x];
        game.board[y + 1][x] = game.board[y][x];
        game.board[y][x] = 0;
        game.direction = 'down'
      }
    }
  }

  if (game.board[y - 1]) {
    if(game.board[y - 1][x] === 0) {
        game.board[y - 1][x] = game.board[y][x];
        game.board[y][x] = 0;
        game.direction = 'up'
      } else if (game.board[y - 2]) {
        if (game.board[y - 2][x] === 0) {
          game.board[y - 2][x] = game.board[y - 1][x];
          game.board[y - 1][x] = game.board[y][x];
          game.board[y][x] = 0;
          game.direction = 'up'
        }
      }
  }

  if (game.direction === "") {
    return {
      type: 'NO_MOVE'
    }
  }
  game.id = id;
  return {
    type: MOVE_TILE,
    payload: game
  }
}
