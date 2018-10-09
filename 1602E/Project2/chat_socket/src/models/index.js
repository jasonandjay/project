import cookie from 'js-cookie';
export default {

  namespace: 'index',

  state: {
    isLogin: false, // 是否登陆
    token: cookie.get('token') || ''       // 登陆凭证
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line

    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
    login(state, action) {
      console.log('action..', action.payload);
      // 设置cookie
      if (action.payload.isRemember){
        // 设置过期时间
        let date = +new Date();
        date += 2*60*60*1000;
        cookie.set('token', action.payload.token, {expires: new Date(date)});
      }else{
        cookie.set('token', action.payload.token);
      }

      return {}
    }
  },
};
