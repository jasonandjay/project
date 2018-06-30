import React from 'react';
import {NavLink} from 'react-router-dom';
import '../../../scss/header.css';

export default class Header extends React.Component{
    constructor(){
        super()
    }

    render(){
        console.log('this.props.',this.props);
        return <div className="header">{
            this.props.navList.map((item, index)=>{
                return <NavLink to={`/home/main/${index}`} key={index}>{item}</NavLink>
            })
        }{this.props.children}</div>
        // return this.props.children
    }
}