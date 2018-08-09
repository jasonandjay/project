import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';

// 封装的类似与router-view的组件
import RouterView from './router/RouterView';
// 路由配置
import config from './router/router.config';

ReactDOM.render(<Router>
    <RouterView routes={config.routes}></RouterView>
</Router>, document.getElementById('root'));
