import {
    CHANGE_NUM,
    SELECT_ITEM
} from '../actions/actionTypes';

let initialState = {
    num: 1,
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
        case SELECT_ITEM: selectItem(state, action);
        default: return state;
    } 
}

const selectItem = (state, action)=>{
    let newState = [...state];
    // console.log('newState...', state, newState, action)
    newState.forEach(item=>{
        console.log(item, 'action..', action)
        if (item.id == action.text.id){
            console.log(1);
            item.checked = !item.checked
        }
    })
    return newState;
}

export default (state=initialState, action)=>{
    return {
        list: changeNum(state.list, action)
    }
}