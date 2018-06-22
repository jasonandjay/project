import React from 'react';
import '../scss/login.css';

export default class Chart extends React.Component{
    constructor(){
        super()
        this.state = {
            username: '',
            password: ''
        }
    }

    valueChange(type){
        
    }

    render(){
        return <div className="login">
            <p>登陆页面</p>
            <input type="text" value={this.state.username} placeholder="请输入用户名" 
                onChange={(e)=>{this.valueChange('username', e.target.value)}}/>
            <input type="password" value={this.state.password} placeholder="请输入密码" 
                onChange={(e)=>{this.valueChange('password', e.target.value)}}/>
            <button>登陆</button>
        </div>
    }
}