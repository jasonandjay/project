import {getCityList} from '../../api';

let state = {
    locationCity: '',
    provinces: [],
    cities: [],
    isShowCity: false
}

let mutations = {
    updateProvinces(state, payload){
        state.provinces = payload.data;
    },
    updateCities(state, payload){
        state.cities = payload.data;
        state.isShowCity = true;
    },
    hideCity(state, payload){
        state.isShowCity = false;
    }
}

let actions = {
    getCityList({commit}, payload){
        console.log(payload);
        if (payload){
            // 如果payload有数据，获取城市列表
            getCityList(payload)
            .then(body=>{
                commit('updateCities', body);
            })
        }else{
            // 如果payload没有数据，获取省份列表
            getCityList()
            .then(body=>{
                commit('updateProvinces', body);
            })
        }
    }
}

export default{
    namespaced: true,
    state,
    mutations,
    actions
}
