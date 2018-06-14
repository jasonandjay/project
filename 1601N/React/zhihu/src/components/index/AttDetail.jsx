import React from 'react';
import PropType from 'prop-types';

export default class Gallery extends React.Component{
    constructor(props, context){
        super(props);
        console.log(context);
        let data = context.router.route.location.data;
        if (!Object.keys(data)){
            data = {}
        }else{
            window.localStorage.setItem('detail', JSON.stringify(data));
        }
        this.state = {
            data  
        }
    }

    componentDidMount(){
        if (!Object.keys(this.state.data).length){
            this.setState({
                data: JSON.parse(window.localStorage.getItem('detail'))
            })
        }
    }

    render(){
        return <div>
            <p>{this.state.data.target.question.title}</p>
            <p>{this.state.data.target.excerpt}</p>
        </div>
    }
}

Gallery.contextTypes = {
    router: PropType.object.isRequired
}