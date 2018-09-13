import {getImgDetailList} from '../../api/index';

let state = {
    list: [],
    page: 1
}

let mutations = {
    updateList(state, payload){
        state.list = state.list.concat(payload);
        state.page++;
    }
}

let actions = {
    getImgDetailList({commit, state}){
        console.log('state...', state);
        getImgDetailList(2593, 6, state.page)
        .then(body=>{
            commit('updateList', body.data.List);
        })
    }
}

export default{
    namespaced: true,
    state,
    mutations,
    actions
}
