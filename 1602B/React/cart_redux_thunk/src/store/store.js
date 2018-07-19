import {createStore, applyMiddleware} from 'redux';

import Logger from 'redux-logger';
import Thunk from 'redux-thunk';

import reducers from './reducer';

export default createStore(reducers, applyMiddleware(Logger, Thunk));