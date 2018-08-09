// 一级路由
import List from '../components/List';
import Detail from '../components/Detail';

// 二级路由
import Content from '../components/Content';

export default {
    routes: [{
        path: '/list',
        component: List,
        children: [{
            path: '/list/content',
            component: Content
        }]
    },{
        path: '/detail',
        component: Detail
    }]
}