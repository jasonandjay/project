// 初始化state
let initialState = {
    list: [{
        id: 0,
        name: '螺旋韩刚',
        isSelect: false
    },{
        id: 1,
        name: '热镀锌',
        isSelect: false
    },{
        id: 2,
        name: '角钢',
        isSelect: false
    },{
        id: 3,
        name: '直槽钢',
        isSelect: false
    },{
        id: 4,
        name: '工业线材',
        isSelect: false
    },{
        id: 5,
        name: '圆培',
        isSelect: false
    },{
        id: 6,
        name: '钢管制品',
        isSelect: false
    },{
        id: 7,
        name: '彩涂',
        isSelect: false
    }],
    isMulti: false
}

// redeucer监听函数
const handleList = (state, action)=>{
    let list = [...state.list];
    switch(action.type){
        case 'ITEM_CLICK':
            if (state.isMulti){
                // 处理多选
                list[action.payload].isSelect = !list[action.payload].isSelect;
            }else{  
                // 处理单选
                list.forEach(item=>{
                    item.isSelect = false;
                })
                list[action.payload].isSelect = true;
            }
            return list;
        case 'REMOVE_ITEM':
            list[action.payload].isSelect = !list[action.payload].isSelect;
            return list;
        case 'REMOVE_ALL':
            list.forEach(item=>{
                item.isSelect = false;
            })
            return list;
        case 'SINGLE_SELECT':
            let index = list.findIndex(item=>{
                return item.isSelect == true;
            })
             // 处理单选
             list.forEach(item=>{
                item.isSelect = false;
            })
            // if (index != -1){
            //     list[index].isSelect = true;
            // }
            return list;
        default: 
            return state.list;
    }
}

const handleMulti = (state, action)=>{
    switch(action.type){
        case 'CHANGE_MULTI':
            return !state;
        default: 
            return state
    }
}

// 导出reducer
export default (state = initialState, action)=>{
    // reducer里存储的数据
    return {
        list: handleList(state, action),
        isMulti: handleMulti(state.isMulti, action)
    }
}