import * as actionTypes from './actionTypes';

// 获取数据action生成函数
export const fetchList = (payload)=>{
    return {
        type: actionTypes.FETCH_LIST,
        payload
    }
}

// 点击商品action生成函数
export const itemClick = (payload)=>{
    return {
        type: actionTypes.ITEM_CLICK,
        payload
    }
}