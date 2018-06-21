export default (state = [], action)=>{
    switch(action.type){
        case 'CHANGE_CITY': return action.text;
        default: return state;
    }
}