let initialState = {
    list: []
}

const handleList = (state, action)=>{
    let list = [...state];
    switch(action.type){
        case 'INIT_LIST':
            return action.payload;
        case 'READ':
            console.log('action...', action);
            list.forEach(item=>{
                if (item.id == action.payload){
                    item.isRead = true;
                }
            })

            return list;
        default: 
            return list;
    }
}

export default (state = initialState, action)=>{
    return {
        list: handleList(state.list, action)
    }
}