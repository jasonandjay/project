let initialState = {
    text: '123',
    type: 'all',    //all表示全部，finish表示已完成，unfinish表示未完成
    list: []
};

const changeText = (state, action)=>{
    switch(action.type){
        case 'CHANGE_TEXT': return action.payload.text;
        default: return state;
    }
}

const changeList  = (state, action)=>{
    console.log('state...', state);
    switch(action.type){
        case 'ADD_LIST': return state.list.concat({
            text: state.text,
            finish: false,
            id: state.list.length
        });
        case 'CLICK_LIST': 
            let list = [...state.list];
            list.forEach((item, index)=>{
                if (item.id == action.payload){
                    item.finish = !item.finish
                }
            })
            return list;
        default: return state.list
    }
}

const changeType = (state, action)=>{
    switch(action.type){
        case 'CHANGE_TYPE': return action.payload;
        default: return state;
    }
}


export default (state = initialState, action)=>{
    return {
        text: changeText(state.text, action),
        list: changeList(state, action),
        type: changeType(state.type, action)
    }
}