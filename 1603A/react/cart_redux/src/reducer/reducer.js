// 初始化state
let initialState = {
    list: [],
    isSelectAll: false
}

// redeucer监听函数
const handleList = (state, action)=>{
    switch(action.type){
        default: return state
    }
}

// 导出reducer
export default (state = initialState, action)=>{
    // reducer里存储的数据
    return {
        list: handleList(state.list, action),
        a: 100
    }
}