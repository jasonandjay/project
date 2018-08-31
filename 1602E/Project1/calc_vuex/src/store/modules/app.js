// 数据区域
let state = {
    num: 1000,
    list: [
        1,2,3,4,5,6,7,8,9,0
    ]
}

// 派生数据区域
let getters = {
    getNum: state=>state.num*100,
    oddList: state=>state.list.filter(item=>!(item%2))
}

// 突变区域
let mutations = {
    changeNum: (state, payload)=>{
        console.log('state...', state, 'payload...', payload);
        if (payload == '+'){
            state.num++;
        }else{
            state.num--;
        }
    }
}

// 异步突变区域
let actions = {

}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    // actions
}