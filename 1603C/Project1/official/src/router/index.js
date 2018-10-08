import Vue from 'vue';
import VueRouter from 'vue-router';

// 加载路由页面
const Index = ()=>import('@/views/Index.vue');
const Detail = ()=>import('@/views/Detail.vue');
const Img = ()=>import('@/views/Img.vue');
const ColorType = ()=>import('@/views/ColorType.vue');
const CarType = ()=>import('@/views/CarType.vue');
const Quotation = ()=>import('@/views/Quotation.vue');

Vue.use(VueRouter);

export default new VueRouter({
    routes:[{
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
