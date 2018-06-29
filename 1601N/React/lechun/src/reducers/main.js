let initialState = {
    loading: false,
    list: []
}

const changeLoading = (state, action)=>{
    switch (action.type){
        case 'LOADING': return action.text;
        default: return state;
    }
}

const changeList = (state, action)=>{
    switch (action.type){
        case 'INIT_DATA': return action.text;
        case 'ADD_NUM': {
            // 接收两个id，分类tid, 商品pid
            // let newState = state.map((item, index)=>{
            //     if (index == action.text.tid){
            //         let newItems = item.items.map((value, key)=>{
            //             if (key == action.text.pid){
            //                 return Object.assign({}, value, {num: ++value.num})
            //             }
            //             return value;
            //         })
            //         return Object.assign({}, item, {items:newItems});
            //     }else{
            //         return item;
            //     }
            // })
            // return newState;
            state.forEach((item, index)=>{
                if (index == action.text.tid){
                    item.items.forEach((value, key)=>{
                        if (key == action.text.pid){
                            value.num++;
                        }
                    })
                }
            })
            return [...state];
        };
        case 'SUB_NUM': {
            state.forEach((item, index)=>{
                if (index == action.text.tid){
                    item.items.forEach((value, key)=>{
                        if (key == action.text.pid){
                            value.num--;
                        }
                    })
                }
            })
            return [...state];
        };
        default: return state;
    }
}


export default (state = initialState, action)=>{
    return {
        loading: changeLoading(state.loading, action),
        list: changeList(state.list, action)
    }
}