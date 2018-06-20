import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import store from './store';
 
let render = ()=>ReactDOM.render(<App />, document.querySelector('#root'));

render();
store.subscribe(render);