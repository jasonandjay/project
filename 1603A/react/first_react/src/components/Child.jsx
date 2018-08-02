import React from 'react';

export default class Child extends React.Component{
    constructor(props){
        super(props);
        console.log('constructor props...', props);
    }
    
    componentDidMount(){
        setTimeout(()=>{
            this.props.updateList([11,12,13,14,15,16,17,18,19,20]);
        }, 5000);
    }

    render(){
        console.log('render props...', this.props);
        // return <p>我是Child组件</p>;
        return this.props.list.map((item, index)=>{
            return <li key={index}>{item}</li>
        })

        // 重要的props children
        // return this.props.children;
    }
}