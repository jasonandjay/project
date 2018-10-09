import React from 'react';
import Chat from '../components/Chat';
import styles from './ChatPage.css';

export default class ChatPage extends React.Component{
  // 类的构造函数，用来做一些初始化操作
  constructor(props){
    super(props);
  }

  render(){
    return <div className={styles.chat_page}>
      <Chat></Chat>
    </div>
  }
}
