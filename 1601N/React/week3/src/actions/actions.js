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

export const startLoading = (text)=>{
    return {
        type: actionTypes.START_LOADING,
        text
    }
}

export const endLoading = (text)=>{
    return {
        type: actionTypes.END_LOADING,
        text
    }
}


export const loginAsync = (username, password)=>{
    return (dispatch, getState)=>{
        dispatch(startLoading())

        fetch(`/login?username=${username}&password=${password}`)
        .then(res=>{
            res.json().then(body=>{
                setTimeout(()=>{
                    dispatch(endLoading());
                    if (body.code === 0){
                        dispatch(login());
                    }else{
                        alert(body.msg);
                    }
                }, 10000);
               
            })
        })
    }
}