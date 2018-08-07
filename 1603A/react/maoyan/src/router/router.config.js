// 一级路由
import Tab from '../components/Tab';
import Detail from '../components/Detail';

export default{
    routes:[{
        path: '/tab',
        component: Tab,
        children: [{
            path: '/tab/hot',
            component: Tab
        }]
    },{
        path: '/detail',
        component: Detail
    }]
}