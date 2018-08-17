// 初始化state
let initialState = {
    isLogin: false
}

// redeucer监听函数
const handleLogin = (state, action)=>{
    switch(action.type){
        case 'LOGIN':
            return true;
        default: 
            return state
    }
}

// 导出reducer
export default (state = initialState, action)=>{
    // reducer里存储的数据
    return {
        isLogin: handleLogin(state.isLogin, action),
    }
}