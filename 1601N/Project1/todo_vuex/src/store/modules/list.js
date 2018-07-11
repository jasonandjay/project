const state = {
    type: 'all',    //all 表示全部， finish表示已完成, unfinish表示未完成
    text: '',
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
            if (item === payload){
                item.finish = !item.finish;
            }
        })
    },
    changeType: (state, payload)=>{
        state.type = payload;
    },
    changeText: (state, payload)=>{
        console.log('payLoad...', payload);
        state.text = payload;
    }
}

export default {
    state,
    mutations
}