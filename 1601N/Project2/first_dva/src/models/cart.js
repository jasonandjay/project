import {query} from '../services/example';

export default {
    // 命名空间，既模块的名字
    namespace: 'cart',
  
    // 模块里初始数据的地方
    state: {
        list: []
    },
  
    subscriptions: {
        // 监听history
      setup({ dispatch, history }) {  // eslint-disable-line
        console.log('history...', history, history.location.pathname);
        if (history.location.pathname == '/cart'){
            console.log(1111);
            dispatch({
                type: 'cart/fetchDataAsync',
                payload: 100
            })
        }
      },
    },

    // 相当于redux中的redux-saga
    // 相当于vuex里边的action，处理异步操作最后触发reducer
    // payload就是携带的数据
    // 前面一个参数为触发的action对象
    // 后一个参数为从saga中获取的方法,call是调用，put相当于dispatch
    effects: {
      *fetch({ payload }, { call, put }) {  // eslint-disable-line
        yield put({ type: 'save' });
      },
      *fetchDataAsync({ type, payload }, { call, put }) {  // eslint-disable-line
        console.log('payload...', type, payload);
        let data = yield query();
        console.log('data...', data);
        yield put({ type: 'fetchList', payload: data.data.user });
      },
    },
    
    // 相当于vuex里边的同步处理函数mutation
    // 里面函数的名字要与dispatch的action的type匹配
    // state是完整的state， 返回也要返回完整的state
    reducers: {
      save(state, action) {
        return { ...state, ...action.payload };
      },
      fetchList(state, action){
          console.log('state...', state, 'action...', action);
          let arr = {...state};
          arr.list = action.payload;
          return arr;
      }
    },
  
  };
  