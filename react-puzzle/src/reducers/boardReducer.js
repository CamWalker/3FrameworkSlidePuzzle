// import { GET_FEED } from '../actions/feedActions'

const INITIAL_STATE = {
  board: [[9, 8, 7],
          [6, 5, 4],
          [3, 2, 0]]

}


export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    // case GET_FEED:
    //   return { ...state, feed: action.payload}
    default:
      return state;
  }
}
