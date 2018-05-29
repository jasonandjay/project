// initial state
const state = {
    msg: '我来自store的list模块'
}

const mutations = {
    changeMsg(){
        setTimeout(()=>{
            state.msg = '修改后的msg';
        }, 1000);
    }
}


  
export default {
    state,
    mutations
}