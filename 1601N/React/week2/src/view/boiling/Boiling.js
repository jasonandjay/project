import React, { Component, Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import Router from '../../router/router'
import './boiling.css'

class Boiling extends Component {
    render() {
        return (
            <div className="boiling">
                <div className="nav">
                    <NavLink to="/boiling/recommend">推荐</NavLink>
                    <NavLink to="/boiling/dynamic">动态</NavLink>
                </div>
                <Router routes={this.props.childRoutes}></Router>
            </div>
        )
    }
}

export default Boiling
