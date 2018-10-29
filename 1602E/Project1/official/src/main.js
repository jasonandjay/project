// import Vue from 'vue'
// import App from './App.vue'
// // 引入路由
// import router from './router';
// // 引入vuex
// import store from './store';

// // 自定义过滤器
// Vue.filter('filterS', (val, status)=>{
//     console.log(val, status);
//     return val.status==status?val.text:'';
// })

// // 自定义指令
// Vue.directive('myShow', {
//     bind: (el, binding)=>{
//         if (binding.value){
//             el.style.display = 'block'
//         }else{
//             el.style.display = 'none'
//         }
//     }
// })

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

const Fragment = (props)=>{
    return props.children;
}

const Index = ()=>{
    return <Fragment>
        <h1 className={styles.title}>我是React</h1>
        <img src={kobe}/>
        <img  className="img" src={black}/>
    </Fragment>
}
ReactDOM.render(<Index />, document.querySelector('#app'));
