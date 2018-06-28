let initialState = {
    isLogin: false
}

const doLogin = (state, action)=>{
    switch(action.type){
        case 'LOGIN': return true;
        case 'LOGOUT': return false;
        default: return state
    }
}

export default (state=initialState, action)=>{
    return {
        isLogin: doLogin(state.isLogin, action)
    }
}