import { getRank } from '../services/index.js';
export default {

    namespace: 'rank',

    state: {

    },

    subscriptions: {
        setup({ dispatch, history }) {  // eslint-disable-line
        },
    },

    effects: {
        *getRank({ payload }, { call, put }) {
            let dataRank = yield call(getRank);
            console.log('dataRank...', dataRank.data.data);
            yield put({
                type: 'updateState',
                payload: dataRank.data.data
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
