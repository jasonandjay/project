import {createStore, applyMiddleware} from 'redux';
import Logger from 'redux-logger';
import reducer from './reducer';

export default createStore(reducer, applyMiddleware(Logger));

