import { combineReducers } from 'redux';
import playerReducer from './playerReducer';

const mainReducer = combineReducers({
  player: playerReducer
});

console.log("mainReducer", mainReducer)

export default mainReducer;