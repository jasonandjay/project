import React from 'react';
import PropType from 'prop-types';

export default class Com extends React.Component{
    constructor(props, router){
        super(props);
        // 在constructor获取route信息
        console.log('router...', router.router.route.match.params.id);
    }

    
    render(){
        // 在普通方法中获取route信息
        console.log(this.context.router.route.match.params.id);
        return <p>我是Com组件</p>
    }
}

// 定义一个上下文类型，对router做类型校验为对象，同时必传
Com.contextTypes = {
    router: PropType.object.isRequired
}