import React from 'react';
import {
    NavLink,
    // Route
} from 'react-router-dom';
import '../scss/type.css';
import Route from '../router/route';
import withAd from '../components/hoc/withAd';
import withLoading from '../components/hoc/withLoading';


class Type extends React.Component{
    constructor(){
        super();
        this.state = {
            list: ['热门推荐', '手机数码', '家用电器', '电脑办公'],
            fetching: true,    //false表示请求完成，true表示正在请求
        }
    }

    componentDidMount(){
        setTimeout(()=>{
            this.setState({
                fetching: false
            })
        }, 3000);
    }

    render(){
        return <div className="list">
            <div>{
                this.state.list.map((item, index)=>{
                    return <NavLink to={`/type/${index}`} key={index}>{item}</NavLink>
                })
            }</div>
            <Route routes={this.props.routes}></Route>   
            {/* <Route path="/type/:id?" component={SubType}></Route> */}
        </div>
    }
}

export default withLoading(Type);