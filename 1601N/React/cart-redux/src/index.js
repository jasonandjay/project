import React from 'react';
import ReactDOM from 'react-dom';
import Chart from './components/chart.jsx';
import chartStyle from './scss/chart.css';
import listStyle from './scss/list.css';

import store from './store';
import {Provider} from 'react-redux';

ReactDOM.render(
    <Provider store={store}>
        <Chart />
    </Provider>, document.getElementById('root'));

