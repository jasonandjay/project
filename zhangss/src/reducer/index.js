const data={
    wode: 1,
    yinyue:0
}
const wode = (state,action) =>{
    switch(action.type){
        case "count":
        return action.text
        default :
        return state.wode
    }
}
const yinyue = (state,action) =>{
    switch(action.type){
        case "count":
        return action.text
        default :
        return state.yinyue
    }
}
export default (state=data,action)=>{
    return {
        wode:wode(state,action),
        yinyue:yinyue(state,action)
    }
}