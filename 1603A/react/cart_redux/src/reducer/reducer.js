// 初始化state
let initialState = {
    list: [],
    isSelectAll: false
}

// redeucer监听函数
const handleList = (state, action)=>{
    let list = [...state];
    switch(action.type){
        case 'FETCH_LIST': 
            return action.payload;
        case 'ITEM_SELECT':
            list[action.payload].checked = !list[action.payload].checked;
            return list;
        default: 
            return state
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