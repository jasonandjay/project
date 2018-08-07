import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

export default class Tab extends Component {
    render() {
        return (
            <div>
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
