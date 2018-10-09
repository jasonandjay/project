import cookie from 'js-cookie';
export default {

  namespace: 'chat',

  state: {
    list: []
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
    receiveMessage(state, action){
      console.log('action...', action);
      return {...state, list: state.list.concat(action.payload)}
    }
  },
};
