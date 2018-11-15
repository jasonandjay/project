import React from 'react';
import { Router } from 'dva/router';

import RouterView from './router/RouterView';
import config from './router/index';

function RouterConfig({ history, app }) {
  let routes = config(app).routes;
  return (
    <Router history={history}>
        <RouterView routes={routes}></RouterView>
    </Router>
  );
}

export default RouterConfig;
