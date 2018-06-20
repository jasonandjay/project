import {createStore} from 'redux';
import reducres from './reducers.js';

let store = createStore(reducres);
export default store;
