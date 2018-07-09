import React from 'react';

export default class Child extends React.Component{
    constructor(){
        super();
        this.state = {
            delete: ''
        }
    }

    shouldComponentUpdate(nextPorps, nextState){
        console.log('nextPorps..1', nextPorps);
        return true;
    }

    componentWillReceiveProps(nextPorps){
        console.log('nextPorps..2', nextPorps);
    }

    render(){
        console.log('执行render...2');
        return <h2>将要销毁的元素</h2>
    }
}