let initialState = {
    username: '',
    password: '',
    list: JSON.parse(window.sessionStorage.getItem('list') || '[]')
}

const changeUsername = (state, action)=>{
    switch(action.type){
        case "CHANGE_USERNAME": return action.payload;
        default: return state;
    }
}

const changePassword = (state, action)=>{
    switch(action.type){
        case "CHANGE_PASSWORD": return action.payload;
        default: return state;
    }
}

const changeList = (state, action)=>{
    switch(action.type){
        case "ADD_LIST":
            let list = [...state, {
                username: action.payload.username,
                password: action.payload.password
            }];
            window.sessionStorage.setItem('list', JSON.stringify(list));
            return list;
        case "DELETE_LIST": 
            list = [...state];
            list.splice(action.payload, 1);
            return list;
        default: return state;
    }
}

export default (state = initialState, action)=>{
    return {
        username: changeUsername(state.username, action),
        password: changePassword(state.password, action),
        list: changeList(state.list, action)
    }
}