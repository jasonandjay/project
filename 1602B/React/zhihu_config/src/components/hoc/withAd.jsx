import React,{Fragment} from 'react';
import "../../scss/withLoading.css"

export default (WrapCommponent)=>{
    return class extends React.Component{
        constructor(){
            super();
        }

        render(){
            return <Fragment>
                <WrapCommponent {...this.props}/>
                <div className="ad">
                    <a href="">点击打开手机京东</a>
                </div>
            </Fragment>
        }
    }
}