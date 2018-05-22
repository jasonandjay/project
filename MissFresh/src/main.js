import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';


// 路由配置
import Index from './component/Index.vue';
import Vip from './component/Vip.vue';
import Shopping from './component/Shopping.vue';
import My from './component/My.vue';
Vue.use(VueRouter)
const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path: '/vip',
      component: Vip
    },
    {
      path: '/shopping',
      component: Shopping
    },
    {
      path: '/my',
      component: My
    }
  ]
})


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
