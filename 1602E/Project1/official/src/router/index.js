import Vue from 'vue';
import VueRouter from 'vue-router';
// 引入组件
// import Index from '../components/Index';
// 路由懒加载
const Index  = ()=>import('../components/Index');
const Detail  = ()=>import('../components/Detail');
const Img  = ()=>import('../components/Img');
const Color  = ()=>import('../components/Color');
const Type  = ()=>import('../components/Type');
const Quotation  = ()=>import('../components/Quotation');
const Login = ()=>import('../components/Login');
// 需要安装插件 cnpm i -D babel-plugin-syntax-dynamic-import

Vue.use(VueRouter);

const router = new VueRouter({
    // 两种模式
    mode: 'hash',
    routes: [{
        path: '/index',
        name: 'Index',
        component: Index
    },{
        path: '/detail',
        name: 'Detail',
        component: Detail
    },{
        path: '/color',
        component: Color
    },{
        path: '/type',
        component: Type
    },{
        path: '/img',
        component: Img
    },{
        path: '/quotation',
        component: Quotation
    },{
        path: '/login',
        component: Login
    },{
        path: '*',
        redirect: '/index'
    }]
})

// 全局导航守卫
router.beforeEach((to, from ,next)=>{
    let login = window.localStorage.getItem('login');
    if (!login && to.path != '/login'){
        next('/login');
    }
    next();
})

router.afterEach((to, from)=>{
    console.log('路由跳转...');
})
export default router;
