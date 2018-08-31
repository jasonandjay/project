// 数据区域
let state = {
    num: 1000,
   
}

// 突变区域
let mutations = {
    changeNum: (state, payload)=>{
        console.log('app2里面的changNum响应了');
    }
}

export default {
    state,
    mutations,
}