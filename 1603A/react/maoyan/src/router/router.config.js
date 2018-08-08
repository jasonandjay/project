// 一级路由
import Tab from '../components/Tab';
import Detail from '../components/Detail';

// 二级路由
import Hot from '../components/tab/Hot';
import Movie from '../components/tab/Movie'
import My from '../components/tab/My';

// 三级路由
import Current from '../components/tab/hot/Current';
import Next from '../components/tab/hot/Next';


export default{
    routes:[{
        path: '/tab',
        component: Tab,
        children: [{
            path: '/tab/hot',
            component: Hot,
            children: [{
                path: '/tab/hot/current',
                component: Current
            },{
                path: '/tab/hot/next',
                component: Next
            }]
        },{
            path: '/tab/movie',
            component: Movie
        },{
            path: '/tab/my',
            component: My
        }]
    },{
        path: '/detail',
        component: Detail
    }]
}