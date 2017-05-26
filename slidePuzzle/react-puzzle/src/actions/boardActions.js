const MOVE_TILE = 'MOVE_TILE';

export function moveTile(x, y, game) {
  console.log(x, y, game);
  if (game.board[y][x + 1] === 0) {
    game.board[y][x + 1] = game.board[y][x];
    game.board[y][x] = 0;
    console.log(game.board);
  } else if (game.board[y][x - 1] === 0) {
    game.board[y][x - 1] = game.board[y][x];
    game.board[y][x] = 0;
    console.log(game.board);
  } else if (game.board[y + 1][x] === 0) {
    game.board[y + 1][x] = game.board[y][x];
    game.board[y][x] = 0;
    console.log(game.board);
  } else if (game.board[y - 1][x] === 0) {
    game.board[y - 1][x] = game.board[y][x];
    game.board[y][x] = 0;
    console.log(game.board);
  }
}
