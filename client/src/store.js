import { createStore, applyMiddleware } from 'redux';
import mainReducer from './Reducers/reducer';
import ReduxPromise from 'redux-promise';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

//http://redux.js.org/docs/advanced/AsyncFlow.html
//const store = applyMiddleware(ReduxPromise)(createStore)(mainReducer);
// const store = createStore(mainReducer);
// createStore(mainReducer);
// console.log("store", store)

const middleware = applyMiddleware(ReduxPromise, thunk, logger());
export default createStore(mainReducer, middleware);
