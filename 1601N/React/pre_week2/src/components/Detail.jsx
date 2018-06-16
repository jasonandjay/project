import React from 'react';
import PropTypes from 'prop-types';

export default class Detail extends React.Component{
    constructor(props, context){
        super(props);
        let data = context.router.route.location.data;
        if (data && Object.keys(data).length){
            window.localStorage.setItem('data', JSON.stringify(data));
        }else{
            data = JSON.parse(window.localStorage.getItem('data'));
            // data = {};
        }
        console.log(data);
        this.state = {
            data
        }
    }

    render(){
        return <div>
            <img src={this.state.data.img} alt=""/>
            <p>{this.state.data.name}</p>
            <p>{this.state.data.desc}</p>
        </div>
    }
 }

 Detail.contextTypes = {
    router: PropTypes.object.isRequired 
 } 
