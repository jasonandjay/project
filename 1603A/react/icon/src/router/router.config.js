import Tab from '../components/Tab';
import Login from '../components/Login';

import Index from '../components/tab/Index';
import My from '../components/tab/My';

export default {
    routes: [{
        path: '/tab',
        component: Tab,
        children: [{
            path: '/tab/index',
            component: Index
        },{
            path: '/tab/my',
            component: My
        }]
    }, {
        path: '/login',
        component: Login
    }]
}