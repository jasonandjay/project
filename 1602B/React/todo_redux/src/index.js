import React from 'react';
import ReactDOM from 'react-dom';

import Index from './components/Index';
import {Provider} from 'react-redux';
import store from './store/store';

ReactDOM.render(<Provider store={store}>
    <Index/>
</Provider>, document.getElementById('root'));