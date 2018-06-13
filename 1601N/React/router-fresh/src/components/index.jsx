import React from 'react';
import PropType from 'prop-types';
import {
    Route,
    Link
} from 'react-router-dom';

export default class Index extends React.Component{
    constructor(props, context){
        super(props);
        this.state = {
            type: ['热卖','乳品','熟食','水果']
        }
        console.log(context);
    }
    
    render(){
        console.log(this.context);
        return <div>
            <header>{
                this.state.type.map((item, index)=>{
                    return <Link to={`/index/${index}`} key={index}>{item}</Link>
                })
            }</header>
            <div>
                <Route exact path="/index" render={({match})=>{
                    return <h3>欢迎来到二级路由页面</h3>
                }}></Route>
                <Route path="/index/:id?" render={({match})=>{
                    let id = match.params.id;
                    return <h3>{this.state.type[id]}</h3>
                }}></Route>
            </div>
        </div>
    }
}

Index.contextTypes = {
    router: PropType.object.isRequired
}