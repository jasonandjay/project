let initialState = {
    text: '123',
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
        case 'ADD_LIST': return state.list.concat(state.text);
        default: return state.list
    }
}


export default (state = initialState, action)=>{
    return {
        text: changeText(state.text, action),
        list: changeList(state, action)
    }
}