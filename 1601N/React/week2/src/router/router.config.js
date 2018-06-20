import Home from '../view/home/Home'
import Boiling from '../view/boiling/Boiling'
import Brochure from '../view/brochure/Brochure'
import Open from '../view/open/Open'
import Activity from '../view/activity/Activity'

import Dynamic from '../view/boiling/dynamic/Dynamic'
import Recommend from '../view/boiling/recommend/Recommend'

let router = {
    routes:[
        {
            id:'0',
            path:'/home',
            component:Home
        },{
            id:'1',
            path:'/boiling',
            component:Boiling,
            children:[
                {
                    id:'0',
                    path:'/boiling/recommend',
                    component:Recommend
                },{
                    id:'1',
                    path:'/boiling/dynamic',
                    component:Dynamic
                }
            ]
        },{
            id:'2',
            path:'/brochure',
            component:Brochure
        },{
            id:'3',
            path:'/open',
            component:Open
        },{
            id:'4',
            path:'/activity',
            component:Activity
        }
    ]
}

export default router