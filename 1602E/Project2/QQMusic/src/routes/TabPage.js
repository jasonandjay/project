import React, {Fragment} from 'react';
import styles from './TabPage.scss';
import RouterView from '../router/routerView';
import {NavLink} from 'dva/router';

export default class TabPage extends React.PureComponent{
  render(){
    return <Fragment>
      <header className={styles.header}>
        <NavLink to="/tab/index">推荐</NavLink>
        <NavLink to="/tab/rank">排行榜</NavLink>
        <NavLink to="/tab/search">搜索</NavLink>
      </header>
      <section className={styles.container}>
        <RouterView routes={this.props.routes} className={styles.container}></RouterView>
      </section>
    </Fragment>
  }
}
