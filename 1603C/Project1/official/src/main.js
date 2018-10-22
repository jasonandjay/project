import Vue from 'vue'
import App from './App.vue'

// 引入路由
import router from './router';
// 引入vuex
import store from './store';
// 引入通用弹框
import Alert from '@/components/Alert';
// 引入elemnt-ui;
import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

// 去掉生成环境提示
Vue.config.productionTip = false;

// 注入通用Alert弹框
Vue.prototype.$alert = Alert;

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

// 测试同时弹出多个
// for(let i=0;i<10;i++){
//     Alert('dev.chelun.com', i, ()=>{
//         console.log('点击了确定按钮', i);
//     })
// }

