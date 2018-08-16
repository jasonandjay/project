import React from 'react';

// 非侵入式组件
export default (WrapComponent)=>{
    return class extends React.Component{
        render(){
            return <div>
                <div>
                    <p>请下载淘票票</p>
                    <a href="https://dianying.taobao.com/">下载</a>
                </div>
                <WrapComponent {...this.props}/>
            </div>
        }
    }
}