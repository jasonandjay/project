import Vue from 'vue'
import Index from './components/Index';
import "./scss/reset.css";

new Vue({
  el: '#app',
  render: h => h(Index)
})
