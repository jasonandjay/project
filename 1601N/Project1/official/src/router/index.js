import Vue from 'vue';
import VueRouter from 'vue-router';
// import Index from '../components/Index.vue';


const Index = ()=>import('../components/Index.vue');
const Detail = ()=>import('../components/Detail.vue');

const routes = [{
        path: '/',
        component: Index
    },{
        path: '/detail',
        component: Detail
    }
];

Vue.use(VueRouter);
export default new VueRouter({
    routes
});