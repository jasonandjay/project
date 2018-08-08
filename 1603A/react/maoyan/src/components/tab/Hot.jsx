import React, { Component } from 'react'
import {NavLink} from 'react-router-dom';
import RouterView from '../../router/RouterView';
import '../../scss/hot.css';

export default class Hot extends Component {
    render() {
        return (
            <div className="hot">
                <header>
                    <NavLink to='/tab/hot/current'>正在热映</NavLink>
                    <NavLink to='/tab/hot/next'>即将上映</NavLink>
                </header>
                <section>
                    <RouterView routes={this.props.routes}></RouterView>
                </section>
            </div>
        )
    }
}
