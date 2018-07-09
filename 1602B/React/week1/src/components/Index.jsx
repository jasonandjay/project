import React from 'react';
import Child from './Child';

export default class Index extends React.Component{
    constructor(){
        super();
        this.state = {
            delete: ''
        }
    }

    click(){
        let value = this.refs.input.value;
        this.setState({
            delete: value
        })
    }

    shouldComponentUpdate(nextPorps, nextState){
        console.log('nextState..', nextState);
        if (nextState.delete === '销毁'){
            return true;
        }else{
            return false;
        }
    }

    render(){
        console.log('执行render...');
        return <div>
            <input type="text" placeholder="" ref="input"/>
            <button onClick={()=>this.click()}>执行命令</button>
            {this.state.delete!='销毁'?<Child delete={this.state.delete}/>:null}
        </div>
    }
}