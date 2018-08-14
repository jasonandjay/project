import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';

// 引入中间件logger
import Logger from 'redux-logger';

/** createStore接收两个参数
 * @param reducers 存储数据和修改数据的reducers
 * @param applyMiddleware 应用的中间件
 */
export default createStore(reducers, applyMiddleware(Logger));