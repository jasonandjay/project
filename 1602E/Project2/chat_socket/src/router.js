import React from 'react';
import { Router, Redirect, Route, Switch } from 'dva/router';
import dynamic from 'dva/dynamic';
import cookie from 'js-cookie';

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
        <Route path="/" exact render={()=>{
          // 做个跳转前检测
          if (!cookie.get('token')){
            return <Redirect to="/login"></Redirect>
          }else{
            return <ChatPage/>
          }
        }}/>
        <Route path="/login" exact component={IndexPage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
