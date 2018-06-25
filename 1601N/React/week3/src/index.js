import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';

import {Row, Col} from 'antd';
import Nav from './components/Nav';
import Route from './router/router.js';
import routeConfig from './router/router.config';
import './scss/index.css';

// import {Provider} from 'react-redux';
// import store from './store'

ReactDOM.render(
    // <Provider store={store}>
        <Router>
            <Row>
                <Col sm={6} xs={12}>
                    <Nav />
                </Col>
                <Col sm={18} xs={12}>
                    <Route routes={routeConfig.routes}></Route>
                </Col>
            </Row>            
        </Router>
    // </Provider>
    , document.querySelector('#root'));