import React from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

class My extends React.Component{
    constructor(){
        super()
    }
    render(){
        if (!this.props.isLogin){
            return <Redirect to="/login"/>
        }
        return <p>登陆状态：{this.props.isLogin?'已登陆':'未登陆'}</p>
    }
}

const mapStatetoProps = (state)=>{
    return {
        isLogin: state.login.isLogin
    }
}
export default connect(mapStatetoProps)(My)