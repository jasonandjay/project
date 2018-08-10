import React from 'react';
import ReactDOM from 'react-dom';

import {BrowserRouter as Router} from 'react-router-dom';
import RouterView from './router/RouterView';
import config from './router/router.config';

ReactDOM.render(<Router>
    <RouterView routes={config.routes}></RouterView>
</Router>, document.getElementById('root'));
