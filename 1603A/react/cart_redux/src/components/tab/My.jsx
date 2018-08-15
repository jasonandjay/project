import React, { Component } from 'react'
import {connect} from 'react-redux';

class My extends Component {
    componentDidMount(){
        if (!this.props.isLogin){
            this.props.history.push('/login');
        }
    }
    render() {
       
        return (
            <div>
                这是我的页面
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

export default connect(mapStateToProps)(My);
