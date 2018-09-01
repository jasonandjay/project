import Vue from 'vue';
import Vuex from 'vuex';

// 引入modules
import cart from './moudules/cart';
import login from './moudules/login';

// 使用vuex
Vue.use(Vuex);

// 新建单例store
export default new Vuex.Store({
    // 配置模块
    modules: {
        cart,
        login
    }
})