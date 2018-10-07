import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import router from '@/router/index';

Vue.use(ElementUI);

let vm = new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
window.vm = vm;
