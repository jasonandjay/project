// import React from 'react';
// import ReactDOM from 'react-dom';
// import {Provider} from 'react-redux';
// import store from './redux/store';
// import Cart from './components/Cart';
// import './scss/index.scss';

// ReactDOM.render(<Provider store={store}>
//     <Cart></Cart>
// </Provider>, document.getElementById('root'));

// // console.log('陈蔓杰');
// console.log(112231);


import Vue from 'vue';
import Index from './index.vue';

new Vue({
    el: '#root',
    render: h=>h(Index)
})