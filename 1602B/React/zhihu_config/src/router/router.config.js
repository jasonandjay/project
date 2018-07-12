// 一级路由
import Tab from '../components/Tab';
import Detail from '../components/Detail';

// 二级路由
import Index from '../components/tab/Index';
import Idea from '../components/tab/Idea';
import Message from '../components/tab/Message';
import University from '../components/tab/University';
import My from '../components/tab/My';

// 三级路由
import Follow from '../components/tab/index/Follow';
import Hot from '../components/tab/index/Hot';
import Recommend from '../components/tab/index/Recommend';


export default {
    routes: [{
        path: '/detail',
        component: Detail,
    }, {
        path: '/tab',
        component: Tab,
        children: [{
            path: '/tab/index',
            component: Index,
            children: [{
                path: '/tab/index/follow',
                component: Follow
            },{
                path: '/tab/index/hot',
                component: Hot
            },{
                path: '/tab/index/recommend',
                component: Recommend
            }]
        },{
            path: '/tab/message',
            component: Message
        },{
            path: '/tab/university',
            component: University
        },{
            path: '/tab/idea',
            component: Idea
        },{
            path: '/tab/my',
            component: My
        }]
    }]
}