// 事件生成函数
import * as actionTypes from './actionTypes';

export const addNum = (text)=>{
    return {
        type: actionTypes.ADD_NUM,
        text
    }
}

export const subNum = (text)=>{
    return {
        type: actionTypes.SUB_NUM,
        text
    }
}

export const addList = (text)=>{
    return {
        type: actionTypes.ADD_LIST,
        text
    }
}

export const clearList = (text)=>{
    return {
        type: actionTypes.CLEAR_LIST,
        text
    }
}