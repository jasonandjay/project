import React from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';


class Chart extends React.Component{
    constructor(){
        super()
    }

    render(){
        if (!this.props.login){
            return <Redirect to='/login'/>
        }
        return <p>我是chart</p>
    }
}

const mapStatetoProps = (state, ownProps)=>{
    return {
        login: state.isLogin,
        ...ownProps
    }
}

export default connect(mapStatetoProps)(Chart)