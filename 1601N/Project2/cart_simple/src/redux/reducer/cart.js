// state初始值
let initialState = {
    isSelectAll: false  // 购物车是否选中全部
}


// 导出reducer
export default (state = initialState, action)=>{
    // 返回state
    return {
        isSelectAll: false
    }
}