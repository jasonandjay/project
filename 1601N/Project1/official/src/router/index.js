import Vue from 'vue';
import VueRouter from 'vue-router';
// import Index from '../components/Index.vue';



const Index = ()=>import('../components/Index.vue');
const Detail = ()=>import('../components/Detail.vue');
const Img = ()=>import('../components/Img.vue');

const routes = [{
        path: '/',
        component: Index
    },{
        path: '/detail',
        component: Detail
    },{
        path: '/img',
        component: Img
    }
];

Vue.use(VueRouter);
export default new VueRouter({
    routes
});