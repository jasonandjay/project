import React, { Component } from 'react';
import RouterView from '../router/RouterView';
import {NavLink} from 'react-router-dom';

export default class Tab extends Component {
    render() {
        return <div>
             <RouterView routes={this.props.routes}></RouterView>
            <footer>
                <NavLink to='/tab/index'>首页</NavLink>
                <NavLink to='/tab/my'>我的</NavLink>
            </footer>
        </div>
    }
}
