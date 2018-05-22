import Vue from 'vue'
import Router from 'vue-router'

// 传统加载模式
// import Index from '@/components/Index'
// import Message from '@/components/Message'
// import Shopping from '@/components/Shopping'
// import My from '@/components/My'
// import Order from '@/components/Order'
// 引入二级组件
// import Read from '@/components/message/read.vue'
// import Unread from '@/components/message/unread.vue'

// 懒加载模式
const Index = () => import('@/components/Index')
const Message = () => import('@/components/Message')
const Shopping = () => import('@/components/Shopping')
const My = () => import('@/components/My')
const Order = () => import('@/components/Order')
const Read = () => import('@/components/message/read.vue')
const Unread = () => import('@/components/message/unread.vue')

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
      // props: true,    // id当作props来传递
      component: Message,
      children: [
        {
          path: 'read',
          component: Read
        },{
          path: 'unread',
          name: 'Unread',
          component: Unread
        }
      ]
    },{
      path: '/shopping',
      name: 'Shopping',
      component: Shopping
    },{
      path: '/my',
      name: 'My',
      component: My    
    }
  ]
})
