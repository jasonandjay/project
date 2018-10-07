import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

// 引入组件
// import Index from '@/components/Index';
// import Login from '@/components/Login';

// 按需加载
const Index = ()=>import('@/components/Index');
const Login = ()=>import('@/components/Login');

export default new VueRouter({
  routes: [{
    path: '/',
    name: 'Index',
    component: Index
  }, {
    path: '/login',
    name: 'Login',
    component: Login
  }, {
    path: '*',
    redirect: '/'
  }]
})
