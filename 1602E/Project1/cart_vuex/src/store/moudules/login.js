let state = {
    isLogin: true
}

let mutations = {
    doLogin(state, payload){
        if (payload.username == '1602E' && payload.password == '1602E'){
            state.isLogin = !state.isLogin;
        }
    }
}

export default {
    namespaced: true,
    state,
    mutations
}