// 存放数据的地方
const state = {
    num: 100
};

// 派生数据
const getters = {
    doubleNum(state){
      return state.num*2
    }
}

// 同步改变
const mutations = {
    changeNum(state, payload){
      console.log('state...', state, 'payload...', payload);
        state.num = payload;
    }
}

// 异步改变
const actions = {
    changeNumAsync({commit}, payload){
      // console.log('context...', context, 'payload...', payload);
      commit('changeNum', payload);
    }
}

export default {
  state,
  getters,
  actions,
  mutations
}
