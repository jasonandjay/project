let initialState = {
    province: [],
    index: 0
}

let province = (state=initialState, action)=>{
    console.log(state);
    state = state.province;
    switch(action.type){
        case 'CHANGE_PROVINCE': return action.text;
        default: return state;
    }
}
let index = (state=initialState, action)=>{
    state = state.index;
    switch(action.type){
        case 'CLICK_INDEX': return action.text;
        default: return state
    }   
}

export default (state, action)=>{
    return {
        province: province(state, action),
        index: index(state, action)
    }
}