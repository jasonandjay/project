import Vue from 'vue';
import Vuex from 'vuex';
import Logger from 'vuex/dist/logger';

// 引入modules
import index from './modules/index';
import detail from './modules/detail';
import img from './modules/img';

Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        loading: true
    },
    mutations: {
        changeLoading(state, payload){
            state.loading = payload;
        }
    },
    modules:{
        index,
        detail,
        img
    },
    plugins: [Logger()]
})
