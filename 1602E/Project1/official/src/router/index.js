import Vue from 'vue';
import VueRouter from 'vue-router';
// 引入组件
// import Index from '../components/Index';
// 路由懒加载
const Index  = ()=>import('../components/Index');
// 需要安装插件 cnpm i -D babel-plugin-syntax-dynamic-import

Vue.use(VueRouter);

export default new VueRouter({
    // 两种模式
    mode: 'hash',
    routes: [{
        path: '/index',
        name: 'Index',
        component: Index
    },{
        path: '*',
        redirect: '/index'
    }]
})