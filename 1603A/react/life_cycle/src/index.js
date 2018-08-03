import React from 'react';
import ReactDOM from 'react-dom';
import Index from './components/Index';
import Child from './components/Child';

ReactDOM.render(<Index/>, document.getElementById('root'));
// 挂载另外一个组件
ReactDOM.render(<Child/>, document.getElementById('child'));

// 卸载组件
setTimeout(()=>{
    ReactDOM.unmountComponentAtNode(document.getElementById('child'));
}, 3000);
