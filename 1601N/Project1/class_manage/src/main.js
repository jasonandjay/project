import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js';
import ElementUI,{Loading, MessageBox} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);


Vue.prototype.$loading = Loading.service;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
