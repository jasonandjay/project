import React from 'react';

export default class Fragment extends React.Component{
    constructor(){
        super()
    }
    render(){
        return this.props.children
    }
}