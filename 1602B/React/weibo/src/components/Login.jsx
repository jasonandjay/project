import React from 'react';
import axios from 'axios';


export default class Login extends React.Component{
    constructor(){
        super();
    }

    submit(){
        let username = this.refs.username.value,
            password = this.refs.password.value;
        console.log(username, password);
        if (!username){
            alert('请输入用户名');
            return;
        }
        if (!password){
            alert('请输入密码');
            return;
        }
        axios.post('http://169.254.239.219:10000/login', {
            username,
            password
        })
        .then(res=>{
            console.log('body...', res)
            alert(res.data.msg)
        })
    }

    render(){
        return <div className="login">
            <input placeholder="请输入用户名" ref="username"/>
            <input type="password" placeholder="请输入密码" ref="password"/>
            <button onClick={()=>{this.submit()}}>登陆</button>   
        </div>  
    }
}