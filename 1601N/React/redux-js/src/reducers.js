import {
    ADD_NUM,
    SUB_NUM,
    ADD_LIST,
    CLEAR_LIST
} from './actionTypes';
import {combineReducer} from 'redux';

let intialState = {
    num: 0,
    list: []
};


let changeNum = (state=intialState, action)=>{
    state = state.num;
    switch(action.type){
        case ADD_NUM: 
            state += action.text; 
            return state;
        case SUB_NUM: 
            return state -= action.text;
        default:
            return state
    }
}

let changeList = (state=intialState, action)=>{
    state = state.list;
    switch(action.type){
        case ADD_LIST: 
            state = [...state, action.text];break;
        case CLEAR_LIST:
            state = []; break;
    }
    return state;
}

// export default combineReducer({
//     num: changeNum
// })

export default (state, action)=>({
    num: changeNum(state, action),
    list: changeList(state, action)
})