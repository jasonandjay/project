import React from 'react';
import PropType from 'prop-types';

export default class Gallery extends React.Component{
    constructor(props, context){
        super(props);

        let data = context.router.route.location.data;
        // 判断路由传过来的data是否有数据
        if (data && Object.keys(data).length){
            window.localStorage.setItem('detail', JSON.stringify(data));
        }else{
            data = {}
        }

        this.state = {
            data
        }
    }

    componentDidMount(){
        // 判断当前data对象是否为空，如果为空就去localStorage中取数据
        if (!Object.keys(this.state.data).length){
            this.setState({
                data: JSON.parse(window.localStorage.getItem('detail'))
            })
        }
    }

    render(){
        // 判断data对象是否为空
        if (!Object.keys(this.state.data).length){
            return null;
        }

        return <div>
            <p>{this.state.data.target.question.title}</p>
            <p>{this.state.data.target.excerpt}</p>
        </div>
    }
}

Gallery.contextTypes = {
    router: PropType.object.isRequired
}