// 类似于vuex的module
import * as api from '../services/example';
import { routerRedux } from 'dva/router';
import {getToken} from '../utils/request';

export default {
  // 命名空间
  namespace: 'index',
  // 状态
  state: {
    count: 1000,
    data: []
  },
  // 一些订阅操作，可以监听路由，做路由拦截操作
  subscriptions: {
    setup({
      dispatch,
      history
    }) {
      return history.listen(({ pathname }) => {
        if (pathname !== '/login') {
          if (!getToken()){
            dispatch(routerRedux.push({
              pathname: '/login',
            }))
          }
          // dispatch(routerRedux.push({
          //   pathname: '/detail',
          //   query: {
          //     page:2
          //   },
          //   state: {
          //     a: 1
          //   }
          // })),
          console.log('hello world');
          // dispatch({ type: 'load' });
        }
      });
    },
  },
  // 一些副作用，类似于vuex的action
  effects: {
    * fetch({payload}, { call , put }) { // eslint-disable-line
      const result = yield call(api.getList)
      console.log(result)
      yield put({
        type: 'save',
        payload:{
          data: result.data //网络返回的要保留的数据
        }
      });
    },
    * message({payload}, {call, put}){
      const result = yield call(api.sendMessage, payload);
      yield put({
        type: 'sendMessage',
        payload
      })
      return result;
    }
  },
  reducers: {
    save(state, { payload: { data } }) {
       return {
         ...state,
          data: data  //第一个data是state的，第二个data是payload的
      };
    },
    sendMessage(state, {payload}){
        let data = [...state.data];
        data[payload.ind].push(payload);
        console.log('data...', data);
        return {
          ...state, data
        }
    },
    receiveMessage(state, {payload}){
      let data = [...state.data];
      if (payload.ind !== undefined){
        data[payload.ind].push(payload);
        console.log('data...', data);
        return {
          ...state, data
        }
      }else{
        return {
          ...state
        }
      }

  }
  },
};
