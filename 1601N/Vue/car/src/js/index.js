import Index from '../component/index.vue';
import Vue from 'vue';

//挂载根组件
new Vue({
    el: '#app',
    render: h=>h(Index)
})
