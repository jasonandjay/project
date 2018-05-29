import Vuex from 'vuex';
import Vue from 'vue';
import input from './modules/input.js';
import list from './modules/list.js';

// 在Vue中引用插件Vuex
Vue.use(Vuex);

// 生成Vuex实例store
export default new Vuex.Store({
    // 注册模块input和list
    modules: {
        input,
        list
    }
})