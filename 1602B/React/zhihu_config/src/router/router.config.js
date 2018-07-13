import Loadable from 'react-loadable';
import Loading from '../components/common/loading';

/** 
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
*/

// 一级路由
const Tab = Loadable({
    loader: () => import('../components/Tab'),
    loading: Loading,
})
const Detail = Loadable({
    loader: () => import('../components/Detail'),
    loading: Loading,
})

// 二级路由
const Index = Loadable({
    loader: () => import('../components/tab/Index'),
    loading: Loading,
})
const Idea = Loadable({
    loader: () => import('../components/tab/Idea'),
    loading: Loading,
})
const Message = Loadable({
    loader: () => import('../components/tab/Message'),
    loading: Loading,
})
const University = Loadable({
    loader: () => import('../components/tab/University'),
    loading: Loading,
})
const My = Loadable({
    loader: () => import('../components/tab/My'),
    loading: Loading,
})

// 三级路由
const Follow = Loadable({
    loader: () => import('../components/tab/index/Follow'),
    loading: Loading,
})
const Hot = Loadable({
    loader: () => import('../components/tab/index/Hot'),
    loading: Loading,
})
const Recommend = Loadable({
    loader: () => import('../components/tab/index/Recommend'),
    loading: Loading,
})

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