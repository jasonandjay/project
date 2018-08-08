import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import RouterView from '../router/RouterView';

export default class Tab extends Component {
    render() {
        console.log('props...', this.props);
        return (
            <div>
                <RouterView routes={this.props.routes}></RouterView>
                <footer>
                    {/* 在选中当前路由的时候会增加activeClassName的类名，默认为active */}
                    <NavLink activeClassName="active2" to='/tab/hot'>热映</NavLink>
                    <NavLink activeClassName="active3" to='/tab/movie'>影院</NavLink>
                    <NavLink activeClassName="active4" to='/tab/my'>我的</NavLink>
                </footer>
            </div>
        )
    }
}
