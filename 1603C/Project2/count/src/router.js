import React, {Fragment} from 'react';
import { Router, NavLink } from 'dva/router';

import RouterView from './router/RouterView';
import config from './router/index';

function RouterConfig({ history, app }) {
  let routes = config(app).routes;
  // console.log('routes...', routes);
  return (
    <Router history={history}>
      <Fragment>
        <header>
          <NavLink to="/animation">动画</NavLink>
          <NavLink to="/series/recommend">番剧</NavLink>
          <NavLink to="/music">音乐</NavLink>
          <NavLink to="/dance">舞蹈</NavLink>
        </header>

        <RouterView routes={routes}></RouterView>
      </Fragment>

      {/* <Switch>
        <Route path="/" exact component={IndexPage} />
      </Switch> */}
    </Router>
  );
}

export default RouterConfig;
