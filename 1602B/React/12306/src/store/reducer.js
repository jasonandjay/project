let initialState = {
    filter: [],
    list: []
}

const updateFilter = (state, action)=>{
    switch(action.type){
        case 'INIT_FILTER': return action.payload;
        case 'CLICK_FILTER': return [...state].map((item, index)=>{
            if (index == action.payload){
                item.isChecked = !item.isChecked;
            }
            return item;
        })
        default: return state;
    }
}

const updateList = (state, action)=>{
    switch(action.type){
        case 'INIT_LIST': return action.payload;
        default: return state;
    }
}

export default (state = initialState, action)=>{
    return {
        filter: updateFilter(state.filter, action),
        list: updateList(state.list, action)
    }
}