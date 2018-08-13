import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './redux/store';
import Cart from './components/Cart';

ReactDOM.render(<Provider store={store}>
    <Cart></Cart>
</Provider>, document.getElementById('root'));
