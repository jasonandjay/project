// 类似于vuex的module
import * as api from '../services/example';
import md5 from 'md5';
import {setToken} from '../utils/request';

export default {
  // 命名空间
  namespace: 'login',
  // 状态
  state: {
    isLogin: false,
    token: '',
    info: JSON.parse(window.localStorage.getItem('info'))
  },
  // 一些副作用，类似于vuex的action
  effects: {
    * loginAsync({payload}, {call, put}){
      payload.password = md5(payload.password+'hello world');
      // console.log('payload...', payload);
      payload.callback = (res)=>{
        console.log('res...', res);
        put({
          type: 'login',
          payload: res
        })
      }
      yield call(api.login, payload);
    }
  },
  reducers: {
    login(state, {payload}){
      console.log('login payload...', payload);
      let newState = {...state};
      newState.isLogin = true;
      newState.token = payload.token;
      newState.info = {
        username: payload.username,
        avatar: payload.avatar
      }
      setToken(payload.token);
      window.localStorage.setItem('info', JSON.stringify(newState.info));
      return newState;
    }
  },
};
