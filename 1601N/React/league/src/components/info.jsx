import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link
} from 'react-router-dom';

export default class Info extends React.Component{
    constructor(props){
        super(props);
    }

    routerWillLeave(nextLocation){
        console.log('location...', nextLocation)
    }

    render(){
        return <Link to={{
            pathname:'/'
        }}>回到首页</Link>	
    }
}