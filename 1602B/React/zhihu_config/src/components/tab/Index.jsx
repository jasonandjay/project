import React from 'react';
import {NavLink} from 'react-router-dom';
import Route from '../../router/route';
import '../../scss/index.css';

export default class Index extends React.Component{
    constructor(){
        super();
    }

    render(){
        return <div className="index">
            <div className="nav">
                <NavLink to="/tab/index/follow">关注</NavLink>
                <NavLink to="/tab/index/recommend">推荐</NavLink>
                <NavLink to="/tab/index/hot">热榜</NavLink>
            </div>
            <Route routes={this.props.routes}/>
        </div>
    }
}
