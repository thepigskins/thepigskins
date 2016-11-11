import { createStore } from 'redux';
import mainReducer from './Reducers/reducer';

const store = createStore(mainReducer);
console.log("store", store)

export default store;