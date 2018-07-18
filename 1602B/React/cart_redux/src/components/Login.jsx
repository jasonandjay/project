import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class Login extends React.Component{
    constructor(){
        super();
    }

    render(){
        return <div>{
            !this.props.isLogin?
            <div>
                <div>
                    <label htmlFor="">用户名</label>
                    <input type="text" value={this.props.username} placeholder="请输入你的用户名..."
                    onChange={e=>this.props.changeUsername(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="">密码</label>
                    <input type="password" value={this.props.password} placeholder="请输入你的密码..."
                    onChange={e=>this.props.changePassword(e.target.value)}/>
                </div>
                <div>
                    <button onClick={()=>this.props.login(this.props.username, this.props.password)}>登陆</button>
                </div>
            </div>:
            <div>
                <h2>已登陆</h2>
                <button onClick={()=>this.props.logout()}>退出登陆</button>
                <Link to="/">返回首页</Link>
            </div> 
        }</div>
    }
}

const mapStateToProps = (state)=>{
    console.log('state...', state);
    return state.login
}
const mapDispatchToProps = (dispatch)=>{
    return {
        changeUsername: (payload)=>dispatch({
            type: 'CHANGE_USERNAME',
            payload
        }),
        changePassword: (payload)=>dispatch({
            type: 'CHANGE_PASSWORD',
            payload
        }),
        login: (username, password)=>{
            if (username == '1602B' && password == '0718'){
                dispatch({
                    type: 'LOGIN'
                })
            }else{
                alert('登陆失败');
            }
        },
        logout: ()=>dispatch({
            type: 'LOGOUT'
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);