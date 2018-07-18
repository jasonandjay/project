import React from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

class Cart extends React.Component{
    constructor(){
        super()
    }

    render(){
        if (!this.props.isLogin){
            return <Redirect to="/login"/>
        }
        return <p>111</p>
    }
}


const mapStateToProps = (state)=>{
    console.log('state...', state);
    return {
        isLogin: state.login.isLogin
    }
}
export default connect(mapStateToProps)(Cart);