import React from 'react';
import {NavLink} from 'react-router-dom';
import '../scss/header.css';

export default class Header extends React.Component{
    constructor(){
        super();
        this.state = {
            showBoild: false
        }   
    }

    clickBoild(){
        this.setState({
            showBoild: !this.state.showBoild
        })
    }

    render(){
        return <div className="header">
            <img src="" alt=""/>
            <div>
                <span onClick={this.clickBoild.bind(this)}>沸点</span>
                <em className={this.state.showBoild?'select':''}></em>{
                    this.state.showBoild?<ul onClick={this.clickBoild.bind(this)}>
                        <li>
                            <NavLink to="/index">首页</NavLink>
                        </li>
                        <li>
                            <NavLink to="/boild">沸点</NavLink>
                        </li>
                        <li>
                            <NavLink to="/book">小册</NavLink>
                        </li>
                        <li>
                            <NavLink to="/open">开源库</NavLink>
                        </li>
                    </ul>:null
                }
            </div>
            <span>登陆·注册</span>
        </div>
    }
}