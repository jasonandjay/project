// state的初始值
let initialState = {
    list: ['螺旋焊刚','热镀锌','角钢','直槽钢','工业线材','圆培','钢管制品','彩涂'],
    select: [],
    flag: false //false 表示单选， true 表示多选
}


/** state的处理函数
 *  @param state state上一次的值
 *  @param action dispatch传递过来的action
 *  @return 处理后的state  
 */
const updateSelect = (state, action)=>{
    let flag = state.flag;
    state = state.select;
    switch(action.type){
        case 'CLEAR': return [];
        case 'ADD_SELECT': 
            if (flag){
                let index = state.indexOf(action.payload);
                if (index == -1){
                    return [...state, action.payload];
                }else{
                    return [...state];
                }
            }else{
                return [action.payload];
            }
           
        case 'SUB_SELECT': 
            let list = [...state];
            list.splice(list.findIndex(value=>value==action.payload), 1);
            return list;
        default: 
            return state;
    }
}

const changeFlag = (state, action)=>{
    switch(action.type){
        case 'SWITCH': return !state;
        default: return state;
    }
}

/** 导出reducer
 * @param state 上一次的state,
 * @param action dispatch传递的action
 * @return {} 暴露给store的state
 */
export default (state = initialState, action)=>{
    return {
        list: state.list,
        select: updateSelect(state, action),
        flag: changeFlag(state.flag, action)
    }
}