import React from 'react';
import {findDomNode } from 'react-dom';
import {connect} from 'dva';
import { Row, Col, Button } from 'antd';
import styles from './Chat.scss';
import {sendMessage} from '../services/api';
class Chat extends React.Component{
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
      // 把聊天框清空
      this.refs.message.value = '';
      console.log('val...', val);
      // 先把发送的数据存储到redux中
      this.props.receiveMessage({
        time: this.formatTime(),
        class: 'right',
        text: val
      });
      // 发送到websocket
      sendMessage({text:val}, (res)=>{
        // 把数据存到redux中
        console.log('聊天返回的数据..', res);
        if (res.payload){
          this.props.receiveMessage({
            time: this.formatTime(),
            class: 'left',
            text: res.payload
          });
        }
      })
      // this.setState({
      //   list: this.state.list.concat({class:'right', text:val})
      // }, ()=>{
      //   this.autoScroll();
      // })
    }
  }

  // 格式化当前时间如：19:32:05
  formatTime(){
    let date = new Date();
    let hours = date.getHours().toString().padStart(2, '0'),
        min = date.getMinutes().toString().padStart(2, '0'),
        sec = date.getSeconds().toString().padStart(2, '0');
    return `${hours}:${min}:${sec}`;
  }

  autoScroll(){
    let ele = this.refs.scollEle,
        height = this.refs.scrollHeight.getBoundingClientRect().height;
    ele.scrollTop = height - ele.getBoundingClientRect().height;
  }

  componentDidUpdate(){
    this.autoScroll();
  }

  render(){
    console.log('props.list...', this.props.list);
    return <div className="chat_page">
      <Row>
        <Col span={24}>
          <section className={styles.list+' list'} ref="scollEle">
            <div ref="scrollHeight">{
              this.props.list.map((item, index)=>{
                let isImg = item.text.indexOf('.jpg') != -1;
                return <div key={index} className={item.class=='right'?styles.right:styles.left}>
                  <p >{item.time}</p>
                  {isImg?<img className={styles.img} src={`/assets/${item.text}`}/>:<p >{item.text}</p>}
                </div>
              })
            }</div>
          </section>
        </Col>
      </Row>
      <section>
        <Row>
          <Col span={16}><input placeholder="要发送的信息" ref="message" onKeyUp={e=>{
            if (e.keyCode == 13){
              this.submit();
            }
          }}/></Col>
          <Col span={8}><Button type="primary" onClick={(e)=>this.submit(e)}>发送</Button></Col>
        </Row>
      </section>
    </div>
  }
}

const mapStateToProps = (state)=>{
  return {
    list: state.chat.list
  }
}

const mapDispatchToProps = (dispatch)=>{
  return {
    receiveMessage: (res)=>{
      dispatch({
        type: 'chat/receiveMessage',
        payload: res
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Chat)
