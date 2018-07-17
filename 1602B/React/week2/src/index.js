import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';

import Route from './router/router';
import config from './router/router.config';

ReactDOM.render(<Router>
    <Route routes={config.routes}></Route>
</Router>, document.getElementById('root'));