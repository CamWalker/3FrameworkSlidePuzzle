import { combineReducers } from 'redux';
import boardReducer from './boardReducer';

const rootReducer = combineReducers({
  game: boardReducer
})

export default rootReducer;
