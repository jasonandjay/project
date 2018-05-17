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
// 新建一个vue实例
new Vue({
    el: '#app',
    render: h => h(Car)
})