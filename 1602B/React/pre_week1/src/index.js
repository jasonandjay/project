import React from 'react';
import ReactDOM from 'react-dom';
import Index from './components/Index';

// ReactDOM.render(<Index />, document.getElementById('root'));

class Demo{
    constructor(){
        console.log('constructor')
    }

    componentWillMount(){
        console.log('commponentWillMount')
    }

    componentDidMount(){
        console.log('componentDidMount')
    }

    render(){
        return '<p>我是测试类demo</p>'
    }
}

function render(Demo, element){
    var demo = new Demo();

    var div = document.createElement('div');
    div.id = 'root';
    div.innerHTML = demo.render();
    console.log('div...', div);


    demo.componentWillMount && demo.componentWillMount();
    element.parentNode.replaceChild(div, element);
    demo.componentDidMount && demo.componentDidMount();
}

render(Demo, document.getElementById('root'))
