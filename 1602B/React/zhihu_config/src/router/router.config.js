import React from 'react';

import Type from '../components/type';
import SubType from '../components/subType';
import ThirdType from '../components/thirdType';

import withAd from '../components/hoc/withAd';

let Index = (props)=>{
    let path = props.match.path;
    return <p>我是{
        path=='/index'?'首页':
        path=='/type'?'分类':
        path=='/discover'?'发现':
        path=="/cart"?'购物车':'我的'
    }</p>
}

Index = withAd(Index);


export default {
    routes: [{
        path: '/index',
        component: Index,
    }, {
        path: '/type',
        component: Type,
        children: [{
            path: '/type/:id?',
            component: SubType,
            children: [{
                path: '/type/:id?/:sid?',
                component: ThirdType
            }]
        }]
    }, {
        path: '/discover',
        component: Index,
    },{
        path: '/cart',
        component: Index,
    },{
        path: '/my',
        component: Index,
    }]
}