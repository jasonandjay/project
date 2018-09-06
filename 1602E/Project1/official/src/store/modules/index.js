import {getBrandList, getMakeList} from '../../api/index';

let state = {
    letters: [],    // 匹配字母列表
    brand: {},      // 品牌列表
    letter: '',     // 当前选中的品牌字母
    isShow: false,  // 是否显示字母弹框
    brandId: '',     // 品牌id
    makeList: '',    // 车系列表
    isShowList: false   //是否显示车系
}

let mutations = {
    initState: (state, payload)=>{
        // 把车型数据处理一下
        let letters = [];
        let brand = {};
        payload.forEach((item)=>{
            let spell = item.Spelling[0];
            // 判断这个字母是否在前面出现过
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
    },
    // 显示车系数据
    changeMakeList: (state, payload)=>{
        state.brandId = payload.id;
        state.makeList = payload.list;
        state.isShowList = true;
    },
    // 控制字母的显示和隐藏
    showLetter: (state, payload)=>{
        state.isShow = payload;
    },
    // 该变letter
    changeLetter: (state, payload)=>{
        state.letter = payload;
    },
    // 隐藏车系数据
    hideMakeList: (state)=>{
        state.isShowList = false;
    },
    // 显示车系数据
    showMakeList: (state)=>{
        state.isShowList = true;
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
    },
    getMakeList: ({commit, state}, payload)=>{
        // 单点统计的代码
        _hmt.push(['_trackEvent', '点击了品牌', 'tap', payload]);
        if (payload != state.brandId){
            console.log('id...', payload);
            getMakeList(payload).then(body=>{
                console.log('makeList...', body);
                commit('changeMakeList', {
                    id: payload,
                    list: body.data
                })
            })
        }else if (!state.isShowList){
            commit('showMakeList');
        }
    }
}


export default {
    namespaced: true,
    state,
    mutations,
    actions
}
