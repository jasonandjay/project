// import Vue from 'vue'
// import App from './App.vue'
// // 引入路由
// import router from './router';
// // 引入vuex
// import store from './store';

// new Vue({
//   el: '#app',
//   router,
//   store,
//   render: h => h(App)
// })


import React from 'react';
import ReactDOM from 'react-dom';
import kobe from './assets/kobe.jpg';
import black from './assets/black.jpg';
import styles from './index.css';
const Index = ()=>{
    return <React.Fragment>
        <h1 className={styles.title}>我是React</h1>
        <img src={kobe}/>
        <img  className="img" src={black}/>
    </React.Fragment>
}
ReactDOM.render(<Index />, document.querySelector('#app'));
