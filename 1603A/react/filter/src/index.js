import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import store from './store/store';

import Index from './components/Index';

ReactDOM.render(<Provider store={store}>
    <Index></Index>
</Provider>, document.getElementById('root'));
