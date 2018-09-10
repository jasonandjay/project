import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';

// 引入modules
import index from './modules/index';
import detail from './modules/detail';
import quotation from './modules/quotation';
import city from './modules/city';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        index,
        detail,
        quotation,
        city
    },
    plugins: [createLogger()]
})
