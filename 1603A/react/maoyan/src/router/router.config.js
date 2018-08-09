// 一级路由
// import Tab from '../components/Tab';
// import Detail from '../components/Detail';

// 二级路由
// import Hot from '../components/tab/Hot';
// import Movie from '../components/tab/Movie'
// import My from '../components/tab/My';

// 三级路由
import Current from '../components/tab/hot/Current';
import Next from '../components/tab/hot/Next';

// 路由按需加载的依赖
import Loadable from 'react-loadable';
// 路由未加载完成时显示的loading组件
import Loading from '../common/Loading';

const Tab = Loadable({
  loader: () => import('../components/Tab'),
  loading: Loading,
})

const Detail = Loadable({
    loader: () => import('../components/Detail'),
    loading: Loading,
  })


const Hot = Loadable({
    loader: () => import('../components/tab/Hot'),
    loading: Loading,
})
  
const Movie = Loadable({
    loader: () => import('../components/tab/Movie'),
    loading: Loading,
})

const My = Loadable({
    loader: () => import('../components/tab/My'),
    loading: Loading,
})



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