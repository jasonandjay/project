import Login from '../components/Login';
import Tab from '../components/Tab';

import Index from '../components/tab/Index';
import Team from '../components/tab/Team';
import Child from '../components/tab/Child';
import Chart from '../components/tab/Chart';
import My from '../components/tab/My';

let router = {
    routes:[
        {
            id:'0',
            path:'/login',
            component:Login
        },{
            id:'1',
            path:'/tab',
            component:Tab,
            children:[
                {
                    id:'0',
                    path:'/tab/index',
                    component:Index
                },
                {
                    id:'1',
                    path:'/tab/team',
                    component:Team
                },
                {
                    id:'2',
                    path:'/tab/child',
                    component:Child
                },
                {
                    id:'3',
                    path:'/tab/chart',
                    component:Chart
                },
                {
                    id:'4',
                    path:'/tab/my',
                    component:My
                }
            ]
        }
    ]
}

export default router