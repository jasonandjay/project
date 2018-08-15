// state初始值
let initialState = {
    list: [],           // 购物车商品列表
}

// reduce处理函数
const fetchList = (state, action)=>{
    console.log('action...', action, action.payload);
    let list = [...state];
    switch(action.type){
        case 'FETCH_LIST': {
            console.log('payload...', action.payload);
            return action.payload;}
        case 'ITEM_CLICK': 
            list[action.payload].isChecked = !list[action.payload].isChecked;
            return list;
        case 'ADD_NUM':
            list[action.payload].num++;
            return list;
        case 'SUB_NUM':
            if (list[action.payload].num != 0){
                list[action.payload].num--;
            }
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