import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';

import store from './store/store';

import Index from './components/Index';


ReactDom.render(<Provider store={store}>
    <Router>
        <Index></Index>
    </Router>
</Provider>, document.getElementById('root'));