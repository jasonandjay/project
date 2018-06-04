import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';


// 路由配置
import Index from './component/Index.vue';
import Vip from './component/Vip.vue';
import Shopping from './component/Shopping.vue';
import My from './component/My.vue';
import City from './component/common/City.vue';
import Item from './component/common/Item.vue';

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
    },
    {
      path: '/city',
      component: City
    },
    {
      path: '/item',
      name: 'Item',
      component: Item
    }
  ]
})

// 定义一个自定义指令v-myShow,实现跟v-show同样的功能
Vue.directive('myShow', {
  // 当元素更新时调用
  update(el, binding){
    if (binding.value){
      el.style.display = 'block';
    }else{
      el.style.display = 'none';
    }
  }
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
