let state = {
    isShowCity: false,
    currentCity: ''
}

let mutations = {
    showCity(state, payload){
        state.isShowCity = payload;
    }
}

export default{
    namespaced: true,
    state,
    mutations
}
