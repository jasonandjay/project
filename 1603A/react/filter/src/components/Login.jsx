import React, { Component } from 'react'
import {connect} from 'react-redux';

class Login extends Component {
    render() {
        return (
            <div>
               <p>登陆状态: {this.props.isLogin?'已登录':'未登录'}</p>
               <button onClick={()=>{
                   this.props.doLogin();
               }}>去登陆</button>

                <button onClick={()=>{
                    // window.history.back();
                    this.props.history.push('/tab/index');
               }}>回到首页</button>
            </div>
        )
    }
}


const mapStateToProps = (state)=>{
    console.log(state);
    return {
        isLogin: state.my.isLogin
    };
}

const mapDispatchToProps = (dispatch)=>{
    return {
        doLogin: ()=>{
            dispatch({
                type: 'LOGIN'
            })
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);