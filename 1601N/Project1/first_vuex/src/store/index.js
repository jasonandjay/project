import Vue from 'vue';
import Vuex from 'vuex';

import createLogger from 'vuex/dist/logger'
import index from './modules/index';
import defaultModule from './modules/default';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        index2: index,
        defaultModule
    },
    plugins: [createLogger()]
})