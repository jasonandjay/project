import React from 'react';
import {
    Switch,
    Route,
    Link
} from 'react-router-dom';

export default class Boild extends React.Component{
    constructor(){
        super();
    }

    render(){
        return <div>
            <nav>
                <Link to="/boild/recommend">推荐</Link>
                <Link to="/boild/dynamic">动态</Link>
            </nav>
            <Switch>
                <Route path="/boild/dynamic" render={()=>{
                    return <h4>我是动态</h4>
                }}/>   
                <Route render={()=>{
                    return <h4>我是推荐</h4>
                }}/>
            </Switch>
        </div>
    }
}