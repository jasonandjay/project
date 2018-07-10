import {getBrandList} from '../../api/index';

const state = {
    letter: [],
    brandList: [],
    masterList: [],
    masterCls: ''
}

const mutations = {
    updateBrandList: (state, payload)=>{
        state.brandList = payload.brandList;
    },
    updateLetter: (state, payload)=>{
        state.letter = payload.letter;
    }
}

const actions = {
    a: ({commit}, payload)=>{
        getBrandList().then(res=>{
            res.json().then(body=>{
                console.log('body：', body);
                // 处理数据
                if (body.code == 1){
                    let letter = [];
                    let brandList = [];
                    let len = -1;
                    body.data.forEach((item)=>{
                        let speeling = item.Spelling[0];
                        if (letter[len] == speeling){
                            brandList[len].list.push(item);
                        }else{
                            len++;
                            letter.push(speeling);
                            brandList.push({
                                speeling,
                                list: [item]
                            })
                        }
                    })
                    letter.unshift('#');
                    commit('updateBrandList', {brandList});
                    commit('updateLetter', {letter});
                    // setTimeout(()=>lazyLoad.init(), 10);
                }else{
                    alert(body.msg);
                }
            })
        })
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}