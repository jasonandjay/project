import React from 'react';

export default (WrapComponent, a=<a href="www.zhihu.com">下载知乎app</a>)=>{
    // 非侵入式组件
    return class extends React.Component{
        constructor(props){
            super(props);
        }

        render(){
            return <div>{
                    a
                }<WrapComponent />
            </div>
        }
    }
}