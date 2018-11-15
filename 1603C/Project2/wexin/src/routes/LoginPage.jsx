import React from 'react';
import { connect } from 'dva';
import styles from './LoginPage.css';
import { Form, Icon, Input, Button, Checkbox } from 'antd';

const FormItem = Form.Item;

class LoginPgae extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);

        values.username = values.userName;
        delete values.userName;
        delete values.remember;
        this.props.login(values);
      }
    });
  }

  componentDidMount(){
    this.props.form.setFieldsValue({
      'userName': 'chenmanjie',
      'password': 123456
    })
  }

  render() {
    console.log('props...', this.props);
    let {isLogin} = this.props;
    if (isLogin){
      this.props.history.push('/');
    }
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className={styles.loginForm}>
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username"/>
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password"/>
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>Remember me</Checkbox>
          )}
          <a className={styles.loginFormForgot} href="">Forgot password</a>
          <Button type="primary" htmlType="submit" className={styles.loginFormButton}>
            Log in
          </Button>
          Or <a href="">register now!</a>
        </FormItem>
      </Form>
    );
  }
}

const wrapLoginPage = Form.create()(LoginPgae);

const mapStateToProps = state=>{
  return {
    isLogin: state.login.isLogin
  }
}

const mapDispatchToProps = dispatch=>{
  return {
    login: (obj)=>{
      dispatch({
        type: 'login/loginAsync',
        payload: obj
      })
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(wrapLoginPage);
