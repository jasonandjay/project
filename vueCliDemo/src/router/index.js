import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Message from '@/components/Message'
import Shopping from '@/components/Shopping'
import My from '@/components/My'
import Order from '@/components/Order'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },{
      path: '/message/:id?', //id获取，this.$route.params.id
      name: 'Message',
      component: Message
    },{
      path: '/shopping',
      name: 'Shopping',
      component: Shopping
    },{
      path: '/my',
      name: 'My',
      component: My,
      children: [{
        path: 'wallet',
        component: Message
      }, {
        path: 'order',
      component: Order,
    children:[{
      path: 'complete',
      component: {
        data:()=>{return {}},
        template: '<h3>已完成订单</h3>'
      }
    },{
      path: 'pennding',
      component: {
        data:()=>{return {}},
        template: '<h3>未完成订单</h3>'
      }
    }]}]
    }
  ]
})
