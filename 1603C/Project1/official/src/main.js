import Vue from 'vue'
import App from './App.vue'

// 引入路由
import router from './router';
// 引入vuex
import store from './store';
// 引入公共样式
import '@/styles/common.css';

// 去掉生成环境提示
Vue.config.productionTip = false;

// 注入通用Alert弹框
// Vue.prototype.$alert = Alert;

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
