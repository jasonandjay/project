import {getCarInfo} from '@/api/';
const state = {
    list: []
}

const mutations = {
    /**
     *  做数据处理
     *  排序规则: 排量的升序=>发动机功率升序=>吸气方式（自然吸气>涡轮增压）=>年份降序
     * @param {*} state
     * @param {*} payload
     */
    updateCarList(state, payload){
        state.list = payload.list;
        // console.log('payload...', payload.list, sortCar(payload.list),
        //     mergeCar(sortCar(payload.list)),
        //     mergeCar(sortCar(filter(2018, payload.list))));
    }
}

const actions = {
    getCarInfo({commit}, payload){
        getCarInfo(payload).then(res=>{
            console.log('res..', res);
            commit('updateCarList', res.data);
        })
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
