import React from 'react';
import Input from './Input';
import List from './List';

export default class Index extends React.Component{
    constructor(){
        super();
    }

    render(){
        return <div>
            <Input data={{a:1,b:2}} />
            <List />
        </div>
    }
}