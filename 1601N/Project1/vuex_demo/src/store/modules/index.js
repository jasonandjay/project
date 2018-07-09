const state = {
    msg: new Date().toString()
}

const mutations = {
    update: (state, {timestamp})=>{
        // setTimeout(()=>{
            state.msg = timestamp;
        // }, 1000);
    }
}

const actions = {
    update: ({commit}, {timestamp})=>{
        setTimeout(()=>{
            commit({
                type: 'update',
                timestamp
            })
        }, 1000);
    }
}

export default{
    state,
    mutations,
    actions
}