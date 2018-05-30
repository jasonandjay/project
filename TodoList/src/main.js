import Vue from 'vue'
import App from './App.vue'
import store from './store/index.js';

new Vue({
  el: '#app',
  store,  // 引入vuex中的store
  render: h => h(App)
})
