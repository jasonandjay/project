import React, { Component } from 'react'

class Child extends Component {
    // 组件初始化的时候 created
    constructor(props) {
        super(props)

    }

    // 组件挂载之前 beforeMount
    componentWillMount() {

    }

    // 组件挂载完成 mounted
    componentDidMount() {

    }

    // 组件将要接收新的props vue没有的
    // 执行完成之后，this.props指向新的props
    componentWillReceiveProps(nextProps) {
        // 旧的props    this.props
        // 新的props    nextProps
        // console.log(nextProps);
    }

    // 通过返回值判断组件是否需要更新，用于React优化 vue没有的
    // true更新， false不更新
    shouldComponentUpdate(nextProps, nextState) {
        // 旧的props    this.props
        // 新的props    nextProps 
        // 旧的state    this.state
        // 新的state    nextState
        if (this.state === this.nextState){
            return true;
        }else{
            return false;
        }
        // return true;
    }

    // 组件将要更新 beforeUpdate
    componentWillUpdate(nextProps, nextState) {

    }

    // 组件更新完成 updated
    componentDidUpdate(prevProps, prevState) {

    }

    // 组件将要卸载 beforeDestory
    componentWillUnmount() {
        console.log('我将要被卸载了。。。。。。');
    }

    render() {
        console.log('...');
        return (
            <div>
                {/* {this.props.index} */}
                123456
            </div>
        )
    }
}


export default Child