import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';
// 引入中间件
import Logger from 'redux-logger';
import Thunk from 'redux-thunk';

// 引入saga中间件
import createSaga from 'redux-saga';
// 引入saga处理文件
import sagas from '../sagas/index';
// 创建一个saga实例
let Saga = createSaga();


export default createStore(reducers, applyMiddleware(Logger, Thunk, Saga));
// 运行saga
Saga.run(sagas);