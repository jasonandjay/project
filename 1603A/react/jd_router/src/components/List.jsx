import React, { Component } from 'react'
import RouterView from '../router/RouterView';
import {NavLink} from 'react-router-dom';
import '../scss/list.css';

export default class List extends Component {
    constructor(){
        super();
        this.state = {
            list: []
        }
    }

    componentDidMount(){
        fetch('/data.json')
        .then(res=>res.json())
        .then(body=>{
            console.log('body...', body);
            this.setState({
                list: body.json.keywordAreas
            })
        })
    }

    render() {
        return (
            <div className="list">
                <ul>{
                    this.state.list.map((item, index)=>{
                        return <NavLink key={index} to={{
                            pathname: `/list/content/${item.areaId}`,
                            item
                        }}>{item.areaName}</NavLink>
                    })
                }</ul>
                <RouterView routes={this.props.routes}></RouterView>               
            </div>
        )
    }
}
