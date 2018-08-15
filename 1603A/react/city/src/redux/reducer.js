let initialState = {
    list: [],
    countryIndex: 0,
    provinceIndex: 0
}

const handleList = (state, action)=>{
    switch(action.type){
        case 'INITIAL_LIST':
            return action.payload;
        case 'UPDATE_LIST':
            state.push(action.payload);
            return state;
        default: 
            return state;
    }
}

const handleCountry = (state, action)=>{
    switch(action.type){
        case 'COUNTRY_CLICK':
            return action.payload;
        default: 
            return state;
    }
}

const handleProvince = (state, action)=>{
    switch(action.type){
        case 'PROVINCE_CLICK':
            return action.payload;
        default: 
            return state;
    }
}


export default (state = initialState, action)=>{
    return {
        list: handleList(state.list, action),
        countryIndex: handleCountry(state.countryIndex, action),
        provinceIndex: handleProvince(state.provinceIndex, action)
    }
}