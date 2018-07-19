let initialState = {
    isLogin: true,
    username: '',
    password: ''
};

const changeLogin = (state, action)=>{
    switch(action.type){
        case 'LOGIN': return true;
        case 'LOGOUT': return false;
        default: return state;
    }
}

const changeUsername = (state, action)=>{
    switch(action.type){
        case 'CHANGE_USERNAME': return action.payload;
        default: return state;
    }
}

const changePassword = (state, action)=>{
    switch(action.type){
        case 'CHANGE_PASSWORD': return action.payload;
        default: return state;
    }
}

export default (state = initialState, action)=>{
    return {
        isLogin: changeLogin(state.isLogin, action),
        username: changeUsername(state.username, action),
        password: changePassword(state.password, action)
    }
}