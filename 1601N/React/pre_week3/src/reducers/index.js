import * as actionTypes from '../actions/actionTypes';

let initialState = {
    isLogin: false
}

let doLogin = (state = initialState, action)=>{
    switch (action.type){
        case actionTypes.LOGIN:
            return {isLogin: true};
        case actionTypes.LOGOUT:
            return {isLogin: false};
        default:    
            return state
    }
}

export default (state, action)=>{
    return {
        login: doLogin(state, action)
    }
}