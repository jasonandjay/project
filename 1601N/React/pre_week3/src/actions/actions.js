import * as actionTypes from './actionTypes';

export const login = (text)=>{
    return {
        type: actionTypes.LOGIN,
        text
    }
}

export const logout = (text)=>{
    return {
        type: actionTypes.LOGOUT,
        text
    }
}