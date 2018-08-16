import React,{Fragment} from 'react';
import { Router, Route, Switch, NavLink } from 'dva/router';
// import IndexPage from './routes/IndexPage';
// import LogisticsPage from './routes/LogisticsPage';
// import CartPage from './routes/CartPage';
// import MorePage from './routes/MorePage';
// import MyPage from './routes/MyPage';

import dynamic from 'dva/dynamic'
// 路由动态加载
const IndexPage = dynamic({
  component: () => import('./routes/IndexPage')
})
const LogisticsPage = dynamic({
  component: () => import('./routes/LogisticsPage')
})
const CartPage = dynamic({
  component: () => import('./routes/CartPage')
})
const MorePage = dynamic({
  component: () => import('./routes/MorePage')
})
const MyPage = dynamic({
  component: () => import('./routes/MyPage')
})



function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Fragment>
        <Switch>
          <Route path="/" exact component={IndexPage} />
          <Route path="/logistics"  component={LogisticsPage} />
          <Route path="/cart"  component={CartPage} />
          <Route path="/more"  component={MorePage} />
          <Route path="/my"  component={MyPage} />
        </Switch>
        <footer>
          <NavLink to="/index">首页</NavLink>  
          <NavLink to="/logistics">物流</NavLink>  
          <NavLink to="/cart">购物车</NavLink>  
          <NavLink to="/more">更多</NavLink>  
          <NavLink to="/my">我的</NavLink>  
        </footer>  
      </Fragment>
    </Router>
  );
}

export default RouterConfig;
