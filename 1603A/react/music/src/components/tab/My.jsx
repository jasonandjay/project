import React, { Component } from 'react'
import {Redirect} from 'react-router-dom';

export default class My extends Component {
    componentDidMount(){
        // this.isLogin = window.localStorage.getItem('login');
        // this.props.history.push('/login');
    }
    render() {
        this.isLogin = window.localStorage.getItem('login');
        // console.log(this.isLogin);
        if (!this.isLogin){
            // return <Redirect to="/login"></Redirect>
            this.props.history.push('/login');
            return null;
        }
        return (
            <div>
                
            </div>
        )
    }
}
