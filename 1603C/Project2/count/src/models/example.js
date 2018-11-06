// 类似于vuex的module
export default {
  // 命名空间
  namespace: 'example',
  // 状态
  state: {},
  // 一些订阅操作，可以监听路由，做路由拦截操作
  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },
  // 一些副作用，类似于vuex的action
  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
  },
  // 所有的数据改变在这里发生，类似于vuex的mutation
  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
