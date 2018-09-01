let state = {
    list: [],
    isSelectAll: false
}

//muation
let mutations = {
    initData: (state, payload)=>{
        state.list = payload;
    },
    changeSelect: (state, payload)=>{
        state.list[payload].isSelect = !state.list[payload].isSelect 
    },
    changeNum: (state, payload)=>{
        let {index, type} = payload;
        if (type == '+'){
            state.list[index].num++;
        }else{
            state.list[index].num--;
        }
        
    },
}

// 异步mutation
let actions = {
    initData: (context, payload)=>{
        console.log(context, payload);
        // 用fetch获取数据
        fetch('/data.json')
        .then(res=>res.json())
        .then(body=>{
            context.commit('initData', body.list);
        });
    }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}