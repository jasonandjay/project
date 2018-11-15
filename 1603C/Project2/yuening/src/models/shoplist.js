import { queryFakeList, removeFakeList, addFakeList, updateFakeList ,getShopList } from '@/services/api';

export default {
  namespace: 'shopList',

  state: {
    list: [],
  },

  effects: {
    *fetch({ payload }, { call, put }) {
      const response = yield call(getShopList);
      console.log(response)
      yield put({
        type: 'shopList',
        payload: response.list ? response.list : [],
      });
    },
  },

  reducers: {
    shopList(state, action) {
      return {
        ...state,
        list: action.payload,
      };
    },
  },
};
