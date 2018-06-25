import Order from '../components/Order';
 
let router = {
    routes:[
        {
            path:'/console',
            component:Order
        },{
            path:'/manage',
            component:Order,
        },{
            path: '/purchase',
            component: Order,
            children: [{
                path: '/purchase/order',
                component: Order
            }]
        }
    ]
}

export default router