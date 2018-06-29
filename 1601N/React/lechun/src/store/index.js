import {
    createStore,
    applyMiddleware
} from 'redux';
import reducers from '../reducers';
import Logger from 'redux-logger';
import Thunk from 'redux-thunk';

export default createStore(reducers, applyMiddleware(Logger, Thunk));