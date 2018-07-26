// 一级路由
import Tab from '../components/Tab';
import Detail from '../components/Detail';
import Add from '../components/tab/Add';
import Login from '../components/Login';

// 二级路由
import Index from '../components/tab/Index';
import Discover from '../components/tab/Discover';
import Message from '../components/tab/Message';
import My from '../components/tab/My';

// 三级路由
import Follow from '../components/tab/index/Follow';
import Hot from '../components/tab/index/Hot';


export default {
    routes: [{
        path: '/tab',
        component: Tab,
        children: [{
            path: '/tab/index',
            component: Index,
            children: [{
                path: '/tab/index/follow',
                component: Follow
            }, {
                path: '/tab/index/hot',
                component: Hot
            }]
        }, {
            path: '/tab/discover',
            component: Discover
        }, {
            path: '/tab/Message',
            component: Message
        }, {
            path: '/tab/my',
            component: My
        }]
    }, {
        path: '/detail',
        component: Detail
    }, {
        path: '/add',
        component: Add
    }, {
        path: '/login',
        component: Login
    }]
}