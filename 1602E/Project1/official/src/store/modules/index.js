import {getBrandList} from '../../api/index';

let state = {
    letters: [],
    brand: {}
}

let mutations = {
    initState: (state, payload)=>{
        // 把车型数据处理一下
        let letters = [];
        let brand = {};
        payload.forEach((item)=>{
            let spell = item.Spelling[0];
            if (letters.indexOf(spell) != -1){
                // 只要把数据放到brand里
                brand[spell].push(item);
            }else{
                // 把新字母放到letters列表
                letters.push(spell);
                // 在brand里新建一项并赋值为一个数组
                brand[spell] = [item];
            }
        });

        state.letters = letters;
        state.brand = brand;
    }
}

let actions = {
    initState: ({commit}, payload)=>{
        console.log('hello');
        getBrandList().then(body=>{
            console.log('bdoy...', body);
            if (body.code == 1){
                commit('initState', body.data);
            }else{
                alert(body.msg);
            }
        })
    }
} 


export default {
    namespaced: true,
    state,
    mutations,
    actions
}