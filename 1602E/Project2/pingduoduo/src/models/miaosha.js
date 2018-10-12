import { miaosha } from "../services/example";
import { routerRedux } from 'dva/router';

export default {

  namespace: 'miaosha',

  state: {

  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
      return history.listen(({ pathname }) => {
        if (pathname == '/') {
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

  effects: {
    *miaosha({payload}, {call, put}){
      let data = yield call(miaosha);
      console.log('data...', data);
      yield put({
        type: 'updateMiaosha',
        payload: ''
      })
    }
  },

  reducers: {
    updateMiaosha(state, action){
      return {}
    }
  },

};
