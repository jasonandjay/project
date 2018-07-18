import {createStore, applyMiddleware} from 'redux';
import Logger from 'redux-logger';
import reducers from './reducer';

export default createStore(reducers, applyMiddleware(Logger));