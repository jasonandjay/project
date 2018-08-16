import React from 'react';
import {Route, NavLink} from 'dva/router';
import Subscribe from '../components/Subscribe';
import Hot from '../components/Hot';
import {connect} from 'dva';

const Index = () => {
  return (
    <div>
      <header>
        <NavLink to="/index/subscribe">订阅</NavLink>
        <NavLink to="/index/hot">热点</NavLink>
      </header>
      <Route path="/index/subscribe" component={Subscribe}></Route>
      <Route path="/index/hot" component={Hot}></Route>
    </div>
  );
};

Index.propTypes = {
};

export default connect((state)=>{
  console.log('state...', state);
  return {

  }
})(Index);
