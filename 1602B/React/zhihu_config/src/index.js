import React, {Fragment} from 'react';
import Route from './router/route';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    NavLink,
} from 'react-router-dom';
import config from './router/router.config.js';
import './scss/router.css';


ReactDOM.render(<Router>
        <Route routes={config.routes}></Route>   
    </Router>, document.getElementById('root'));