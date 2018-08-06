import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import config from './router/router.config';
import Route from './router/router';

ReactDOM.render(<Router>
    <Route routes={config.routes}></Route>
</Router>, document.getElementById('root'));
