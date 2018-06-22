import * as actionTypes from '../actions/actionTypes';

let initialState = {
    isLogin: true,
    isLoading: false
}

let doLogin = (state, action)=>{
    switch (action.type){
        case actionTypes.LOGIN:
            return true;
        case actionTypes.LOGOUT:
            return false;
        default:    
            return state
    }
}

let finishLoading = (state, action)=>{
    switch (action.type){
        case actionTypes.START_LOADING:
            return true;
        case actionTypes.END_LOADING:
            return false;
        default:    
            return state
    }
}

export default (state=initialState, action)=>{
    return {
        isLogin: doLogin(state.isLogin, action),
        isLoading: finishLoading(state.isLoading, action)
    }
}