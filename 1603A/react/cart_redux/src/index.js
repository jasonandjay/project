import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import store from './store/store';

import {BrowserRouter} from 'react-router-dom';
import config from './router/router.config';
import RouterView from './router/RouterView';

ReactDOM.render(<Provider store={store}>
    <BrowserRouter>
        <RouterView routes={config.routes}></RouterView>
    </BrowserRouter>
</Provider>, document.getElementById('root'));
