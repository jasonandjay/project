import React,{Fragment} from 'react';
import {NavLink} from 'dva/router';
import RouterView from '../router/RouterView';

export default props=>{
  return <Fragment>
    <header>
      <NavLink to='/series/recommend'>推荐</NavLink>
      <NavLink to='/series/continue'>连载动画</NavLink>
      <NavLink to='/series/finish'>完结动画</NavLink>
      <NavLink to='/series/info'>资讯</NavLink>
      <NavLink to='/series/more'>官方延伸</NavLink>
    </header>

    <RouterView routes={props.routes}></RouterView>
  </Fragment>
}
