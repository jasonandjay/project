// 一级路由
import Index from '../components/Index';
import Detail from '../components/Detail';

// 二级路由
import Replaied from '../components/index/Replaied';
import NoReplay from '../components/index/NoReplay';

export default {
    routes: [{
        path: '/index',
        component: Index,
        children: [{
            path: '/index/replaied',
            component: Replaied
        },{
            path: '/index/noReplay',
            component: NoReplay
        }]
    },{
        path: '/detail/:id?',
        component: Detail
    }]
}