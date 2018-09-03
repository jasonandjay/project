import Vue from 'vue'
import App from './App.vue'
// 引入路由
import router from './router';
// 引入vuex
import store from './store';

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
