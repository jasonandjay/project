import React from 'react';

export default class Index extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            types: ['alter', 'confirm', 'prompt'],
            type: ''
        }
    }
    
    buttonClick(type){
        this.setState({
            type
        })
    }       
        render(){
        return <div>{
            this.state.types.map((item, index)=>{
                return <button onClick={()=>this.buttonClick(item)}>{item}</button>
            })
            
        }{
            <Dialog type={this.state.type}/>
        }
        </div>
    }
}