import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './select.css'

class Select extends Component {
    state = {
        text:'首页',
        flag:false
    }
    render() {
        return (
            <ul className="select">
                <span onClick={this.show}>{this.state.text}</span>
                {
                    this.state.flag&&<ol>
                        <NavLink to="/home" onClick={this.hidden}>首页</NavLink>
                        <NavLink to="/boiling" onClick={this.hidden}>沸点</NavLink>
                        <NavLink to="/brochure" onClick={this.hidden}>小册</NavLink>
                        <NavLink to="/open" onClick={this.hidden}>开源库</NavLink>
                        <NavLink to="/activity" onClick={this.hidden}>活动</NavLink>
                    </ol>
                }
            </ul>
        )
    }
    show=()=>{
        this.setState({
            flag:!this.state.flag
        })
    }
    hidden=(e)=>{
        let text = e.target.innerText
        this.setState({
            text,
            flag:!this.state.flag
        })
    }
}

export default Select
