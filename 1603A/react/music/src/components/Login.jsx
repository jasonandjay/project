import React, { Component } from 'react'

export default class Login extends Component {
    render() {
        return (
            <div>
                我是登陆页面
                <button onClick={()=>{
                    window.localStorage.setItem('login', 'true');
                    window.history.back();
                }}>登陆</button>  
            </div>
        )
    }
}
