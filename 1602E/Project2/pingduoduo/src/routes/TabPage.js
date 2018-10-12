import {NavLink} from 'dva/router';
import React from 'react';
import RouterView from '../router/routerView';
import styles from './TabPage.scss';

export default class TabPage extends React.Component{
  render(){
    return <div className={styles.container}>
      <RouterView routes={this.props.routes}></RouterView>
      <footer>
        <NavLink to="/tab/index">首页</NavLink>
        <NavLink to="/tab/recommend">推荐</NavLink>
        <NavLink to="/tab/chat">聊天</NavLink>
        <NavLink to="/tab/search">搜索</NavLink>
        <NavLink to="/tab/mine">个人中心</NavLink>
      </footer>
    </div>
  }
}
