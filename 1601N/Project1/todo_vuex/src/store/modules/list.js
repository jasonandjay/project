const state = {
    list: [{
        text: '111',
        finish: false
    },{
        text: '222',
        finish: true
    },{
        text: '333',
        finish: true
    }]
}

const mutations = {
    addList: (state, payload)=>{
        state.list.push({
            text: payload,
            finish: false
        });
    },
    finish: (state, payload)=>{
        state.list.forEach((item, index)=>{
            if (index === payload){
                item.finish = !item.finish;
            }
        })
    }
}

export default {
    state,
    mutations
}