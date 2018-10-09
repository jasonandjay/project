import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import md5 from 'md5';

// 引入登陆接口
import {doLogin} from '../services/api.js';
const FormItem = Form.Item;
class IndexPage extends React.Component{
  constructor(){
    super();
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        doLogin({
          username: values.userName,
          password: md5(values.password)
        }, (res)=>{
          console.log('收到登陆的返回值...', res);
          this.props.updateLogin(res.payload, values.remember);
        })
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className={styles.login_form}>
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
          <a className={styles.login_form_forgot} href="">Forgot password</a>
          <Button type="primary" htmlType="submit" className={styles.login_form_button}>
            Log in
          </Button>
          Or <a href="">register now!</a>
        </FormItem>
      </Form>
    );
  }
}

const WrappedNormalLoginForm = Form.create()(IndexPage);

const mapDispatchToProps = (dispatch)=>{
  return {
    updateLogin: (token, isRemember)=>{
      dispatch({
        type: 'index/login',
        payload: {
          token, isRemember
        }
      })
    }
  }
}

export default connect(null, mapDispatchToProps)(WrappedNormalLoginForm);
