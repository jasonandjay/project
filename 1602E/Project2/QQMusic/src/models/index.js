import { getIndex } from '../services/index.js';

export default {

  namespace: 'index',

  state: {
    slider: [],
    radioList: []
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *getIndex({ payload }, { call, put }) {
      let data = yield call(getIndex);
      console.log('data...', data);
      yield put({
        type: 'updateState',
        payload: data.data.data
      })
    }
    
  },

  reducers: {
    updateState(state, action) {
      console.log({ ...state, ...action.payload })
      return { ...state, ...action.payload };
    },
  },

};
