import { createStore, applyMiddleware } from 'redux';
import mainReducer from './Reducers/reducer';
import ReduxPromise from 'redux-promise';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const middleware = applyMiddleware(ReduxPromise, thunk, logger());
export default createStore(mainReducer, middleware);
