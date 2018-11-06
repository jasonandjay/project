import {series} from '../services/series';

// 类似于vuex的module
export default {
  // 命名空间
  namespace: 'series',
  // 状态
  state: {
    list: []
  },
  // 一些副作用，类似于vuex的action
  effects: {
    *getSeries({payload}, {call, put}) {
      let data = yield call(series, payload);
      console.log('data...', data);
    }
  },
  // 所有的数据改变在这里发生，类似于vuex的mutation
  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    }
  }
};
