import React from 'react';
import List from './List';

export default class Index extends React.Component{
    constructor(){
        super();
    }

    render(){
        return <List total={500} pageSize={30}/>
    }
}