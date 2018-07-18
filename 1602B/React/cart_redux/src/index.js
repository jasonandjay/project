import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';

import store from './store/store';

import config from './router/router.config.js';
import Route from './router/route';


ReactDom.render(<Provider store={store}>
    <Router>
        <Route routes={config.routes}/>
    </Router>
</Provider>, document.getElementById('root'));