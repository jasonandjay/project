const state = {
    list: ['今天要吃饭','明天要吃饭','后天也要吃饭']
};

const mutations = {
    saveData(state, res){
        state.list.push(res)
    }
}

export default{
    state,
    mutations
}