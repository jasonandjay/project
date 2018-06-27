import {
    CHANGE_NUM,
    SELECT_ITEM,
    SELECT_ALL_ITEM,
    SELECT_ALL,
    CHANGE_PRICE,
    CLICK_SELECT_ALL
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

export let selectAllItem = (text)=>{
    return {
        type: SELECT_ALL_ITEM,
        text
    }
}

export let selectAll = (text)=>{
    return {
        type: SELECT_ALL,
        text
    }
}

export let clickSelectAll = (text)=>{
    return {
        type: CLICK_SELECT_ALL,
        text
    }
}

export let changePrice = ()=>{
    return {
        type: CHANGE_PRICE
    }
}

