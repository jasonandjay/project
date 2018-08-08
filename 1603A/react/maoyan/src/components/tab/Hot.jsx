import React, { Component } from 'react'
import {NavLink} from 'react-router-dom';
import RouterView from '../../router/RouterView';

export default class Hot extends Component {
    render() {
        return (
            <div>
                <header>
                    <NavLink to='/tab/hot/current'>正在热映</NavLink>
                    <NavLink to='/tab/hot/next'>即将上映</NavLink>
                </header>
                <RouterView routes={this.props.routes}></RouterView>
            </div>
        )
    }
}
