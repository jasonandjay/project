import List from '../components/list';
import Detail from '../components/detail';

export default {    
    routes: [{
        path: '/',
        redirect: '/list'
    }, {
        path: '/list',
        component: List
    }, {
        path: '/detail',
        component: Detail
    }]
}