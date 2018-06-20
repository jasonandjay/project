/*
 * action 创建函数
 */
import * as actionTypes from './actionTypes';

export function addNum(text) {
    return {
        type: actionTypes.ADD_NUM,
        text
    }
}

export function subNum(text) {
    return {
        type: actionTypes.SUB_NUM,
        text
    }
}

export function addList(text){
    return {
        type: actionTypes.ADD_LIST,
        text
    }
}

export function clearList(text){
    return {
        type: actionTypes.CLEAR_LIST
    }
}