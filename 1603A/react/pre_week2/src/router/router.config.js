// 一级路由
import List from '../components/List';
import Detail from '../components/Detail';


export default{
    routes:[{
        path: '/list',
        component: List,
    },{
        path: '/detail',
        component: Detail
    }]
}