import React, { Component } from 'react'
import Child from './Child';

class Index extends Component {
    // 组件初始化的时候 created
    constructor(props) {
        super(props)
        this.state = {
            index: 0
        }
    }

    // 组件挂载之前 beforeMount
    componentWillMount() {

    }

    // 组件挂载完成 mounted
    componentDidMount() {
        setInterval(()=>{
            this.setState({
                index: this.state.index+1
            })
        }, 1000);
    }

    // 组件将要接收新的props vue没有的
    // 执行完成之后，this.props指向新的props
    componentWillReceiveProps(nextProps) {
        // 旧的props    this.props
        // 新的props    nextProps
    }

    // 通过返回值判断组件是否需要更新，用于React优化 vue没有的
    // true更新， false不更新
    shouldComponentUpdate(nextProps, nextState) {
        // 旧的props    this.props
        // 新的props    nextProps 
        // 旧的state    this.state
        // 新的state    nextState
        return true;
    }

    componentWillUpdate(nextProps, nextState) {

    }

    componentDidUpdate(prevProps, prevState) {

    }

    componentWillUnmount() {

    }

    render() {
        return <div>
            {
                this.state.index>10?null:<Child index={this.state.index}></Child>
            }   
        </div>
    }
}


export default Index