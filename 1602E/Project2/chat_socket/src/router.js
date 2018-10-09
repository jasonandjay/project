import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import dynamic from 'dva/dynamic';

const IndexPage = dynamic({
  component: () => import('./routes/IndexPage')
})
const ChatPage = dynamic({
  component: () => import('./routes/ChatPage')
})
// import IndexPage from './routes/IndexPage';
// import ChatPage from './routes/ChatPage';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={ChatPage} />
        <Route path="/login" exact component={IndexPage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
