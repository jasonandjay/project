// 定义action常量
const CHANGE_CITY = 'CHANGE_CITY';
const CHANGE_PROVINCE = 'CHANGE_PROVINCE';
const CLICK_INDEX = 'CLICK_INDEX';

// 定义action生成函数
export let changeCity = (text)=>{
    return {
        type: CHANGE_CITY,
        text
    }
}

export let changeProvince = (text)=>{
    return {
        type: CHANGE_PROVINCE,
        text
    }
}

export let clickIndex = (text)=>{
    return {
        type: CLICK_INDEX,
        text
    }
}