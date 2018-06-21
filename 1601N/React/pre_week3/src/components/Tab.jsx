import React from 'react';
import {NavLink} from 'react-router-dom';
import Route from '../router/router';
import '../scss/tab.css';

export default class Tab extends React.Component{
    constructor(){
        super()
    }

    render(){
        return <div className="tab">
            <div>
                <Route routes={this.props.childRoutes}></Route>
            </div>
            <footer>
                <NavLink to="/tab/index">首页</NavLink>
                <NavLink to="/tab/team">拼团</NavLink>
                <NavLink to="/tab/child">壹圈</NavLink>
                <NavLink to="/tab/chart">购物车</NavLink>
                <NavLink to="/tab/my">我的</NavLink>
            </footer>
        </div>
    }
}