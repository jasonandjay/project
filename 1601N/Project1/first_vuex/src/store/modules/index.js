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
        setInterval(()=>{
            context.commit({
                type: 'update',
                ...payload 
            })
        }, 1000);
    }
}

export default {
    state,
    actions,
    mutations
}