import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import Index from './components/Index';

import store from './store/store';

ReactDom.render(<Provider store={store}>
    <Index/>
</Provider>, document.getElementById('root'));