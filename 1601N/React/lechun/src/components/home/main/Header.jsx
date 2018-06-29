import React from 'react';
import {NavLink} from 'react-router-dom';
import '../../../scss/header.css';

export default class Header extends React.Component{
    constructor(){
        super()
    }

    render(){
        return <div className="header">{
            this.props.navList.map((item, index)=>{
                return <NavLink to={`/home/main/${index}`} key={index}>{item}</NavLink>
            })
        }</div>
    }
}