const state = {
    time: new Date().toString()
}

const mutations = {
    update: (state, {time})=>{
        state.time = time
    }
}

const actions = {
    update: (context, payload)=>{
        console.log('我是default模块的输出')
        // setInterval(()=>{
            context.commit('update', {
                ...payload 
            })
        // }, 1000);
    }
}

export default {
    // namespaced: true,
    state,
    actions,
    mutations
}