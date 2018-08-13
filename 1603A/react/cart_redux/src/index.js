import React from 'react';
import ReactDOM from 'react-dom';
import Cart from './components/Cart';

import {Provider} from 'react-redux';
import store from './store/store';

ReactDOM.render(<Provider store={store}>
    <Cart data={{a:1}}/>
</Provider>, document.getElementById('root'));
