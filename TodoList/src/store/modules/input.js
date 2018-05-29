// initial state
const state = {
    msg2: '我来自store的input模块'
}

const mutations = {
    modifyMsg(){
        state.msg2 = '修改后'
    }
}
  
export default {
    state,
    mutations
}