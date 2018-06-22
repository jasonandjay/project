import React from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {logout} from '../../actions/actions';

class My extends React.Component{
    constructor(){
        super()
    }

    render(){
        if (!this.props.login){
            return <Redirect to='/login'/>
        }
        return <div>
            <p>我是my</p>
            <button onClick={this.props.doLogout}>退出登录</button>
        </div>
    }
}

const mapStatetoProps = (state, ownProps)=>{
    return {
        login: state.isLogin,
        ...ownProps
    }
}

const mapDispatchtoPorps = dispatch=>{
    return {
        doLogout: ()=>dispatch(logout())
    }
}

export default connect(mapStatetoProps, mapDispatchtoPorps)(My)