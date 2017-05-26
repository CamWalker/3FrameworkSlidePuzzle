import { MOVE_TILE, START_GAME } from '../actions/boardActions'

const INITIAL_STATE = {
  board: [[1, 2, 3],
          [4, 5, 6],
          [7, 8, 9]],
  moves: 0,
  won: false,
  id: null,
  direction: '' // for animation
}

const winningArray = [[1, 2, 3],
                      [4, 5, 6],
                      [7, 8, 0]]

function arraysEqual(arr1, arr2) {
    if(arr1.length !== arr2.length)
        return false;
    for(var i = arr1.length; i--;) {
        if(arr1[i] !== arr2[i])
            return false;
    }

    return true;
}

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case MOVE_TILE:
      let won = false;
      if (arraysEqual(action.payload.board[0], winningArray[0]) &&
        arraysEqual(action.payload.board[1], winningArray[1]) &&
        arraysEqual(action.payload.board[2], winningArray[2])) {
        won = true;
      }
      return { ...state,
        board: action.payload.board,
        id: action.payload.id,
        direction: action.payload.direction,
        moves: state.moves + 1,
        won: won
      }
    case START_GAME:
      return { ...state, board: action.payload, won: false, moves: 0}
    default:
      return state;
  }
}
