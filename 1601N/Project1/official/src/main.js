import Vue from 'vue'
import router from './router/index';
import store from './store/index';
import "./scss/reset.css";



new Vue({
  el: '#app',
  router,
  store
  // render: h => h(Index)
})
