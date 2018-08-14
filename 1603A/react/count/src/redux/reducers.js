let initalState = {
    num: 100
}


const handleNum = (state, action)=>{
    switch(action.type){
        case 'ADD':
            return ++state;
        case 'SUB':
            return --state;
        default:
            return state;
    }
}

export default (state = initalState, action)=>{
    return {
        num: handleNum(state.num, action)
    }
}