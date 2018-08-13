import * as actionTypes from './actionTypes';
// state初始值
let initialState = {
    list: [],           // 购物车商品列表
    isSelectAll: false  // 购物车是否选中全部
}

// reduce处理函数
const fetchList = (state, action)=>{
    switch(action.type){
        case actionTypes.FETCH_LIST: return action.payload;
        case actionTypes.ITEM_CLICK: 
            let list = [...state];
            list[action.payload].isChecked = !list[action.payload].isChecked;
            return list;
        default: return state;
    }
}
    

// 导出reducer
export default (state = initialState, action)=>{
    // 返回state
    return {
        list: fetchList(state.list, action)
    }
}