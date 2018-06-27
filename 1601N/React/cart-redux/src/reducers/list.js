import {
    CHANGE_NUM,
    SELECT_ITEM,
    SELECT_ALL_ITEM,
    CHANGE_PRICE,
    SELECT_ALL,
    CLICK_SELECT_ALL
} from '../actions/actionTypes';

let initialState = {
    price: 0,
    isSelectAll: false,
    list: [{
        id: 0,
        checked: false,
        name: '西红柿',
        price: 100,
        num: 1
    },{
        id: 1,
        checked: false,
        name: '西瓜',
        price: 200,
        num: 1
    },{
        id: 2,
        checked: false,
        name: '西葫芦',
        price: 300,
        num: 1
    }]
}

const changeNum = (state, action)=>{
    switch (action.type){
        case CHANGE_NUM: {
            let newState = [...state];
            newState.forEach(item=>{
                if (item.id == action.text.id){
                    action.text.num>0 && (item.num = action.text.num);
                }
            })
            return newState;
        };
        case SELECT_ITEM: {
            let newState = state.map(item=>{
                let obj = {};
                if (item.id == action.text.id){
                    obj = {checked: !item.checked};
                }
                return Object.assign({}, item, obj);
            })
            return newState;
        };
        case SELECT_ALL_ITEM: {
            let newState = state.map(item=>{
                let obj = {checked: action.text};
                return Object.assign({}, item, obj);
            })
            return newState;
        };
        default: return state;
    } 
}

const priceChange = (state, action)=>{
    let price = 0;
    switch(action.type){
        case CHANGE_PRICE: {
            state.list.forEach((item)=>{
                if (item.checked){
                    price += item.num*item.price;
                }
            })
            return price;
        } 
    }
    return state.price;
}

const selectAll = (state, action)=>{
    switch(action.type){
        case SELECT_ALL: {
            let isSelectAll = true
            state.list.forEach((item)=>{
                if (!item.checked){
                    isSelectAll = false;
                }
            })
            return isSelectAll;
        }
        case CLICK_SELECT_ALL: {
            return action.text;
        }
    }

    return state.isSelectAll;
}

export default (state=initialState, action)=>{
    return {
        list: changeNum(state.list, action),
        price: priceChange(state, action),
        isSelectAll: selectAll(state, action)
    }
}