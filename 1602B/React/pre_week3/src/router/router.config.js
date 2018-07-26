import React from 'react';
import Delegate from '../components/money/delegate.jsx';
import Subscribe from '../components/money/subscribe.jsx';
import Purchase from '../components/money/purchase.jsx';
import Route from './route.jsx';

export default {
    routes: [{
        path: '/money',
        component: (props)=><Route routes={props.routes}></Route>,
        children: [{
            path: '/money/delegate',
            component: Delegate,
        },{
            path: '/money/subscribe',
            component: Subscribe,
        },{
            path: '/money/purchase',
            component: Purchase,
        }]
    }]
}