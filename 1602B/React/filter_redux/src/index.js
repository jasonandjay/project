import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import store from './store/store';
import Index from './components/Index.jsx';


ReactDom.render(<Provider store={store}>
    <Index/>
</Provider>, document.getElementById('root'));