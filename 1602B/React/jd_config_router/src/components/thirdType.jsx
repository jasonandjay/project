import React from 'react';
import {
    NavLink,
    Route
} from 'react-router-dom';
export default class ThirdType extends React.Component{
    constructor(props){
        super();
        this.state = {
            params: []
        }
    }

    componentWillReceiveProps(nextProps){
        console.log('nextProps...', nextProps);
        this.id = nextProps.match.params.id;
        // console.log('id...', id);

        let params = nextProps.location.params || [];
        window.localStorage.setItem('params', JSON.stringify(params));
    }

    render(){
        let params = this.props.location.params || [];
        if (params.length){

        }else{
            params = window.localStorage.getItem('params');
            if (params){
                params = JSON.parse(params);
            }else{
                params = []
            }
        }
        return <div className="thirdType">{
            params.map((item,index)=>{
                return <span key={index}>{item}</span>
            })
        }</div>;
    }
}