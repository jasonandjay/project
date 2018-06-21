import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';

import Route from './router/router.js';
import Dialog from './components/Dialog';
import routeConfig from './router/router.config';

import {Provider} from 'react-redux';
import store from './store'

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Fragment>
                <Route routes={routeConfig.routes}></Route>
                <Dialog />
            </Fragment>
        </Router>
    </Provider>
    , document.querySelector('#root'));