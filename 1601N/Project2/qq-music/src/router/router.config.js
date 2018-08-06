import Index from '../components/Index';
import Music from '../components/Music';
 
let router = {
    routes:[
        {
            path:'/index',
            component:Index
        },{
            path:'/music',
            component:Music,
        }
    ]
}

export default router