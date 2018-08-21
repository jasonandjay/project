let initialState = {
    list: []
}

const handleList = (state, action)=>{
    let list = [...state];
    switch(action.type){
        case 'FETCH_DATA':
            return action.payload
        case 'CLICK_ITEM':
            list[action.payload].isSelect = !list[action.payload].isSelect;
            return list;
        default: 
            return list
    }
}

export default (state = initialState, action)=>{
    return {
        list: handleList(state.list, action)
    }
}