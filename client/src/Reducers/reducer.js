import { combineReducers } from 'redux';
import playerReducer from './playerReducer';

const mainReducer = combineReducers({player : playerReducer});

console.log("playerReducer", playerReducer)

export default mainReducer;