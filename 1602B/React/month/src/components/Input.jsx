import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class Input extends React.Component{
    constructor(){
        super();
        this.control = true;    //true表示受控 false表示非受控
    }

    add(){
        // 判端当前组件是受控还是非受控
        let username, password;
        if (this.control){
            username = this.props.username;
            password = this.props.password;
        }else{
            username = this.refs.username.value,
            password = this.refs.password.value;
        }
        this.props.add(username, password);
    }

    render(){
        if (this.control){
            return <div>
                <input value={this.props.username} type="text" onChange={
                    e=>this.props.changeUsername(e.target.value)
                } placeholder="username"/>
                <input value={this.props.password} type="password" placeholder="password" onChange={
                    e=>this.props.changePassword(e.target.value)
                } />
                <Link to="/list">
                    <button onClick={()=>this.add()}>add</button>
                </Link>
            </div>  
        }else{
            return <div>
                <input type="text" placeholder="username" ref="username"/>
                <input type="password" placeholder="password" ref="password"/>
                <Link to="/list">
                    <button onClick={()=>this.add()}>add</button>
                </Link>
            </div>  
        }
    }
}

const mapStateToProps = state=>{
    return {
        username: state.username,
        password: state.password
    }
}

const mapDispatchToProps = dispatch=>{
    return {
        add: (username, password)=>{
            dispatch({
                type: 'ADD_LIST',
                payload: {
                    username,
                    password
                }
            })
        },
        changeUsername: (username)=>{
            dispatch({
                type: 'CHANGE_USERNAME',
                payload: username
            })
        },
        changePassword: (password)=>{
            dispatch({
                type: 'CHANGE_PASSWORD',
                payload: password
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Input);