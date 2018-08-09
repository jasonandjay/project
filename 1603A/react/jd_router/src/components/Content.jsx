import React, { Component } from 'react'
import {NavLink} from 'react-router-dom';

export default class Content extends Component {
    render() {
        // console.log(this.props.location.item);
        let list = this.props.location.item && this.props.location.item.level1words;
        if (!list){
            return null;
        }
        return (
            <div className="content">{
                list.map((item, index)=>{
                    return <NavLink key={index} to={{
                        pathname: '/detail',
                        item
                    }}>
                        <span>{item.keyword}</span>
                    </NavLink>
                })
            }</div>
        )
    }
}
