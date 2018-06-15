import React from 'react';
import {Spin} from 'antd';
import 'antd/lib/spin/style/css'; 

export default (WrapComponent)=>{
    // 侵入式组件
    return class extends WrapComponent{
        constructor(props){
            super(props)
        }

        componentDidMount(){
            super.componentDidMount();
        }

        render(){
            if (this.state.loading){
                return <Spin size="large">{
                    super.render()
                }</Spin>
            }else{
                return super.render()
            }
        }
    }
}