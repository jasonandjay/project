import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import store from './store';
import {Provider} from 'react-redux';
 
// let render = ()=>ReactDOM.render(<App />, document.querySelector('#root'));

// render();
// store.subscribe(render);

ReactDOM.render(<Provider store={store}>
    <App />
</Provider>,  document.querySelector('#root'))