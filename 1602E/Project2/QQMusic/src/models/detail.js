import { getDetail } from '../services/index.js';
export default {

    namespace: 'Detail',

    state: {

    },

    subscriptions: {
        setup({ dispatch, history }) {  // eslint-disable-line
        },
    },

    effects: {
        *getDetail({ payload }, { call, put }) {
            let dataDetail = yield call(getDetail);
            // console.log('dataDetail...', dataDetail.data);
            yield put({
                type: 'updateState',
                payload: dataDetail.data
            })
        }
    },

    reducers: {
        updateState(state, action) {
            // console.log({ ...state, ...action.payload })
            return { ...state, ...action.payload };
        },
    },

};
