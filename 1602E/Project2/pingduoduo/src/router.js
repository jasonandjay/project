import React from 'react';
import { Router, Route, Switch, Redirect } from 'dva/router';

import RouterView from './router/routerView';
import router from './router/index';


function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <RouterView routes={router.routes}></RouterView>
    </Router>
  );
}

export default RouterConfig;
