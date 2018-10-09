import React from 'react';
import { Row, Col, Input, Button } from 'antd';
import styles from './Chat.css';

export default class Chat extends React.Component{
  // 类的构造函数，用来做一些初始化操作
  constructor(props){
    super(props);
    this.state = {
      list: [
        {
          class: 'left',
          text: 'Hello World1'
        },
        {
          class: 'right',
          text: 'Hello World2'
        },
        {
          class: 'right',
          text: 'Hello World3'
        },
        {
          class: 'left',
          text: 'Hello World4'
        }
      ]
    }
  }

  submit(e){
    let val = this.refs.message.value;
    if (val){
      console.log('val...', val);
      this.setState({
        list: this.state.list.concat({class:'right', text:val})
      }, ()=>{
        this.autoScroll();
      })
    }
  }

  autoScroll(){
    let ele = this.refs.scollEle,
        height = this.refs.scrollHeight.getBoundingClientRect().height;
    ele.scrollTop = height - ele.getBoundingClientRect().height;
  }

  render(){
    return <div className={styles.container}>
      <Row>
        <Col span={24}>
          <section className={styles.list} ref="scollEle">
            <div ref="scrollHeight">{
              this.state.list.map((item, index)=>{
                return <p key={index} className={item.class=='right'?styles.right:''}>{item.text}</p>
              })
            }</div>
          </section>
        </Col>
      </Row>
      <section>
        <Row>
          <Col span={16}><input placeholder="要发送的信息" ref="message"/></Col>
          <Col span={8}><Button type="primary" onClick={(e)=>this.submit(e)}>发送</Button></Col>
        </Row>
      </section>
    </div>
  }
}
