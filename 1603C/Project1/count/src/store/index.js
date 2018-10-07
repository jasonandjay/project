import Vue from 'vue';
import Vuex from 'vuex';
// 记录mutation，相当于redux-logger的作用
import Logger from 'vuex/dist/logger';
// 引入module
import app from './module/app';

Vue.use(Vuex);


// 生成一个vuex的实例
export default new Vuex.Store({
  modules: {
    app
  },
  state: {
    a: 10000
  },
  plugins: [Logger()]
})
