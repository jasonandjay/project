import {object} from './output';
console.log('object...', object);

class Cls{
    constructor(){
        console.log('my name is webpack4.0');
    }
};

let cls = new Cls();
async function Async(){};
let [...arr] = [1,2,3];
import style from '../static/index.css';

import img1 from '../static/IMG_0082.JPG';

console.log('img1...', img1);   
// console.log(b);

import output2 from './output2';
console.log('output2...', output2);




import font from '../font/iconfont.css';

// 加载sass
import sass from '../static/index.scss';



// 引入jquery
import $ from "jquery";



// 引入vue组件
import Vue from "vue";
import Index from "../component/index.vue";
import Car from "../component/car.vue";
import Login from "../component/login.vue";

// 引入首页组件index2
import Index2 from '../component/index2.vue';

// 引入父组件main
import Main from '../component/main.vue';

// 引入组件E
import E from '../component/comE.vue';

// 注册单文件组建
Vue.component('Vue', Vue);
Vue.component('Car', Car);
Vue.component('Login', Login);

// 以前的注册组建方式
Vue.component('Logout', {
    data: function(){
        return {
            title: '断剑重铸之日，骑士归来之时'
        }
    },
    template: `<p>{{title}}</p>`,
    methods:{

    },
    mounted: function(){
        console.log('挂载了组建 Logout');
    }
})
// 新建一个vue实例
let vue = new Vue({
    el: '#app',
    // 模板里面使用自定义组建
    // template: `<div><Index/><Car/><Login/><Logout/></div>`
    render: h => h(E)

})

setTimeout(()=>{
    // 调用destory方法注销组建
    // vue.$destroy();
}, 5000);
console.log('vue...', vue);