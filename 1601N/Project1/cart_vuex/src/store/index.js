import Vue from 'vue';
import Vuex from 'vuex';
import index from './modules/index';
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        index
    },
    plugins: [createLogger()]
})