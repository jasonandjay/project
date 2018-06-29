import Home from '../components/Home';
import Login from '../components/Login';

import Main from '../components/home/Main';
import My from '../components/home/My';

import Content from '../components/home/main/Content';

export default {
    routes: [{
        path: '/login',
        component: Login
    }, {
        path: '/home',
        component: Home,
        children: [{
            path: '/home/main',
            component: Main,
            children: [{
                path: '/home/main/:id',
                component: Content
            }]
        }, {
            path: '/home/my',
            component: My
        }]
    }]
}