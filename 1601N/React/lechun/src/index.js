import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router
} from 'react-router-dom';

import Route from './router/route';
import routeConfig from './router/route.config';

import store from './store';
import {Provider} from 'react-redux';

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Route routes={routeConfig.routes}/>
        </Router>
    </Provider>
    , document.getElementById('root'));

