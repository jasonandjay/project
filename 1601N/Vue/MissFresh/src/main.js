import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';


// 路由配置
// import Index from './component/Index.vue';
// import Vip from './component/Vip.vue';
// import Shopping from './component/Shopping.vue';
// import My from './component/My.vue';
// import City from './component/common/City.vue';
// import Item from './component/common/Item.vue';

const Index = () => import('./component/Index.vue');
const Vip = () => import('./component/Vip.vue');
const Shopping = () => import('./component/Shopping.vue');
const My = () => import('./component/My.vue');
const City = () => import('./component/common/City.vue');
const Item = () => import('./component/common/Item.vue');
// 二级路由
const Order = () => import('./component/common/Order.vue');
// 三级路由
const Finish = () => import('./component/common/Finish.vue');
const Unfinish = () => import('./component/common/Unfinish.vue');

Vue.use(VueRouter)
// 处理登陆逻辑
let isLogin = false;


// const router = new VueRouter({
//     routes: [
//         {
//             path: '/login',
//             component: Login
//         },
//         {
//             path: '/app',
//             component: APP,
//             children: [{
//                 path: '/app/main',
//                 component: Main,
//                 children: [{
//                     path: '/app/main/:id',
//                     component: Content
//                 }]
//             }, {
//                 path: '/app/my',
//                 component: My
//             }]
//         }
//     ]
// })

const router = new VueRouter({
    routes: [
        {
            path: '/',
            component: isLogin ? Index : Index
        },
        {
            path: '/vip',
            component: isLogin ? Vip : Index
        },
        {
            path: '/shopping',
            component: isLogin ? Shopping : Index
        },
        {
            path: '/my',
            component: My,
            children: [{
                path: '/my/order',
                component: Order,
                children: [{
                    path: '/my/order/finish',
                    component: Finish
                },{
                    path: '/my/order/unfinish',
                    component: Unfinish
                }]
            },{
                path: '/my/discout',
                component: Order
            }]
        },
        {
            path: '/city',
            component: City
        },
        {
            path: '/item',
            name: 'Item',
            component: Item
        }
    ]
})

// 定义一个自定义指令v-myShow,实现跟v-show同样的功能
Vue.directive('myShow', {
    // 当元素更新时调用
    update(el, binding) {
        if (binding.value) {
            el.style.display = 'block';
        } else {
            el.style.display = 'none';
        }
    }
})

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
