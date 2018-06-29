import React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import 'antd/lib/button/style/css';
import 'antd/lib/icon/style/css';
import 'antd/lib/input/style/css';
import 'antd/lib/form/style/css';
import 'antd/lib/checkbox/style/css';
import '../scss/login.css';
import {Redirect} from 'react-router-dom';

import {connect} from 'react-redux';

const FormItem = Form.Item;

class NormalLoginForm extends React.Component {
	handleSubmit = (e) => {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if (!err) {
				console.log('Received values of form: ', values, this.props);
				if (values.userName == 'liuchang' && values.password == 'liuchang'){
					console.log(111);
					this.props.doLogin(true);
				}
			}
		});
	}
	render() {
		const { getFieldDecorator } = this.props.form;
		return (
			<Form onSubmit={this.handleSubmit} className="login-form">
				<FormItem>
					{getFieldDecorator('userName', {
						rules: [{ required: true, message: 'Please input your username!' }],
					})(
						<Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
					)}
				</FormItem>
				<FormItem>
					{getFieldDecorator('password', {
						rules: [{ required: true, message: 'Please input your Password!' }],
					})(
						<Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
					)}
				</FormItem>
				<FormItem>
					{getFieldDecorator('remember', {
						valuePropName: 'checked',
						initialValue: true,
					})(
						<Checkbox>Remember me</Checkbox>
					)}
					<a className="login-form-forgot" href="">Forgot password</a>
					<Button type="primary" htmlType="submit" className="login-form-button">
						Log in
          </Button>
					Or <a href="">register now!</a>
				</FormItem>
			</Form>
		);
	}
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);


class Login extends React.Component {
	constructor() {
		super()
	}
	render() {
		if (this.props.isLogin){
			return <Redirect to="/home/main"></Redirect>
		}
		return <div>{
			!this.props.isLogin?<WrappedNormalLoginForm {...this.props}/>:
			<Button onClick={()=>this.props.doLogin(false)}>退出登陆</Button>
		}</div>
	}
}

const mapStoP = (state)=>{
	return {
		isLogin: state.login.isLogin
	}
}
const mapDtoP = (dispatch)=>{
	return {
		doLogin: (val)=>dispatch({
			type: val?'LOGIN': 'LOGOUT'
		})
	}
}
export default connect(mapStoP, mapDtoP)(Login)