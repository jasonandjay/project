import React,{Fragment} from 'react';
import Loading from '../common/loading';

export default (WrapCommponent)=>{
    return class extends WrapCommponent{
        constructor(props){
            super(props);
        }

        render(){
            if (this.state.fetching){
                return <Fragment>{
                        super.render()
                    }<Loading/>
                </Fragment> 
            }else{
                return super.render();
            }
        }
    }
}