import {getBrandList, getMakeList} from '@/api/index';

const state = {
    letters: [],
    brandList: {},
    makeList: [],
    showMakeList: false,
    curMasterId: ''
}

const mutations = {
    updateBrandList(state, payload){
        // 处理一下数据
        let letters = [],
            brandList = {};
        payload.forEach((item, index)=>{
            let letter = item.Spelling[0];
            // 判断这个字母是否在字母列表中
            if (letters.indexOf(letter) == -1){
                // 把字母添加到字母列表
                letters.push(letter);
                // 同时在brandList添加一个key为letter的项，值为[item]
                brandList[letter] = [item];
            }else{
                brandList[letter].push(item);
            }
        });
        state.letters = letters;
        state.brandList = brandList;
    },
    updateMakeList(state, payload){
        // 保存品牌id
        state.masterId = payload.masterId;
        state.makeList = payload;
        // 显示车系列表
        state.showMakeList = true;
    },
    hideMakeList(state){
        state.showMakeList = false;
    }
}

const actions = {
    getBrandList({commit}, payload){
        getBrandList().then(res=>{
            console.log('brandList...', res);
            commit('updateBrandList', res.data);
        })
    },
    getMakeList({commit, state}, payload){
        if (payload != state.masterId){
            getMakeList(payload).then(res=>{
                // console.log('makeList...', res);
                res.data.masterId = payload;
                commit('updateMakeList', res.data);
            })
        }
    }
}

export default{
    mutations,
    actions,
    namespaced: true,
    state
}
