import React from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';


class My extends React.Component{
    constructor(){
        super()
    }

    render(){
        if (!this.props.login){
            return <Redirect to='/login'/>
        }
        return <p>我是my</p>
    }
}

const mapStatetoProps = (state, ownProps)=>{
    return {
        login: state.login.isLogin,
        ...ownProps
    }
}

export default connect(mapStatetoProps)(My)