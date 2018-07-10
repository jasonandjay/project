import Vue from 'vue'
import store from './store';
import Index from './components/Index.vue'


new Vue({
  el: '#app',
  store,
  render: h => h(Index)
})
