import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../components/Login.vue';
import Content from '../components/Content.vue';

import Admin from '../components/content/Admin.vue';

const View = null;
const Modify = null;
const Checkin = null;
const Query = null;
const Delete = null;

Vue.use(VueRouter);

const routes = [{
    path: '/',
    redirect: '/content'
},{
    path: '/login',
    component: Login
},{
    path: '/content',
    component: Content,
    children: [{
        path: '/content/view',
        component: View
    },{
        path: '/content/modify',
        component: Modify
    },{
        path: '/content/checkin',
        component: Checkin
    },{
        path: '/content/query',
        component: Query
    },{
        path: '/content/delete',
        component: Delete
    },{
        path: '/content/admin',
        component: Admin
    }]
}];

export default new VueRouter({
    routes
})