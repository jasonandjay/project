import {
    CHANGE_NUM,
    SELECT_ITEM,
    SELECT_ALL
} from './actionTypes';

export let changeNum = (text)=>{
    return {
        type: CHANGE_NUM,
        text
    }
}

export let selectItem = (text)=>{
    return {
        type: SELECT_ITEM,
        text
    }
}

export let selectAll = (text)=>{
    return {
        type: SELECT_ALL,
        text
    }
}