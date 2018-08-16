import React from 'react';
import { Router, Route, Switch, Redirect } from 'dva/router';
import dynamic from 'dva/dynamic'
const IndexPage = dynamic({
  component: () => import('./routes/IndexPage')
})
const MyPage = dynamic({
  component: () => import('./routes/MyPage')
})

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/index"  component={IndexPage} />
        <Route path="/my" exact component={MyPage} />
        <Redirect from="/" to="/index"/>>
      </Switch>
    </Router>
  );
}

export default RouterConfig;
