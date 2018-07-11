import Vue from 'vue'
import App from './components/Index.vue'
import store from './store/index';

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
