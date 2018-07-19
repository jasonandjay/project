import { isIterable } from "core-js";

let initialState = {
    loading: false,
    list: [],
    price: 0,
    isSelectAll: false
}

const updateList = (state, action)=>{
    switch(action.type){
        case 'UPDATE_LIST': return action.payload;
        case 'SELECT_ITEM': 
            let list = [...state];
            list.forEach((item, index)=> {
                if (index == action.payload){
                    item.isSell = !item.isSell;
                }
            });
            console.log(list === state);
            return list;
        case 'CHANGE_NUM':
            list = [...state];
            list.forEach((item, index)=>{
                if (index == action.payload.index){
                    if (action.payload.type == '+'){
                        item.num++;
                    }else{
                        if (item.num>0){
                            item.num--;    
                        }
                    }
                }
            })
            return list;
        case 'SELECT_ALL_ITEM': 
            list = [...state];
            list.forEach((item, index)=>{
                item.isSell = action.payload;
            });
            return list;
        default: return state;
    }
}

const totalPrice = (state, action)=>{
    switch(action.type){
        case 'TOTAL_PRICE': 
            let price = 0;
            state.list.forEach(item=>{
                if (item.isSell){
                    price += item.num * item.price;
                }
            })
            return price;
        default: return state.price;
    }
}

const selectAll = (state, action)=>{
    switch(action.type){
        case 'SELECT_ALL':  return !state;
        default: return state;
    }
}

const changeLoadig = (state, action)=>{
    switch(action.type){
        case 'CHANGE_LOADING': return action.payload;
        default: return state;
    }
}


export default (state=initialState, action)=>{
    return {
        list: updateList(state.list, action),
        price: totalPrice(state, action),
        isSelectAll: selectAll(state.isSelectAll, action),
        loading: changeLoadig(state.loading, action)
    }
}