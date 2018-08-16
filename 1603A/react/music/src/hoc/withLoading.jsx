import React from 'react';
import Loading from '../common/Loading';

// 侵入式组件
export default (WrapComponent)=>{
    return class extends WrapComponent{
        constructor(props){
            super(props);
            this.a =1;
        }
        render(){
           if (this.state.showLoading){
               return <Loading></Loading>
           }else{
               return super.render()
           }
        }
    }
}