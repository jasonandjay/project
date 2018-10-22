import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store';

// 加载路由页面
const Login = ()=>import('@/views/Login.vue');
const Index = ()=>import('@/views/Index.vue');
const Detail = ()=>import('@/views/Detail.vue');
const Img = ()=>import('@/views/Img.vue');
const ColorType = ()=>import('@/views/ColorType.vue');
const CarType = ()=>import('@/views/CarType.vue');
const Quotation = ()=>import('@/views/Quotation.vue');

Vue.use(VueRouter);

let router = new VueRouter({
    routes:[{
        path: '/login',
        name: 'Login',
        component: Login
    }, {
        path: '/index',
        name: 'Index',
        component: Index
    }, {
        path: '/detail',
        name: 'Detail',
        component: Detail
    }, {
        path: '/Img',
        name: 'Img',
        component: Img
    }, {
        path: '/colorType',
        name: 'ColorType',
        component: ColorType
    }, {
        path: '/carType',
        name: 'CarType',
        component: CarType
    }, {
        path: '/quotation',
        name: 'Quotation',
        component: Quotation
    }, {
        path: '*',
        redirect: '/index'
    }]
})

// 全局导航守卫
router.beforeEach((to, from ,next)=>{
    store.commit('changeLoading', true);
    let login = window.localStorage.getItem('login') || '';
    if (!login && to.path != '/login'){
        next('/login');
    }else{
        next();
    }
})

router.afterEach(()=>{
    // setTimeout(()=>{
        store.commit('changeLoading', false);
    // }, 3000);
})

export default router;
