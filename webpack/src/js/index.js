import {object} from './output';
var $ = require('jquery');
console.log('object...', object);
class Cls{
    constructor(){
        console.log('my name is webpack4.0');
    }
};

let cls = new Cls();
async function Async(){};
let [...arr] = [1,2,3];
import style from '../static/index.scss';

import img1 from '../static/IMG_0082.JPG';

console.log('img1...', img1);   
// console.log(b);

import output2 from './output2';
console.log('output2...', output2);


console.log('chenmanjie');

//加载字体
import font from '../font/iconfont.css';

//加载scss
import sass from '../static/index2.scss';

//加载vue
import Vue from 'vue';
// import VueRoute from 'vue-router';npm
import Index from '../component/index.vue';

new Vue({
    el: '#app',
    render: h => h(Index)
})

