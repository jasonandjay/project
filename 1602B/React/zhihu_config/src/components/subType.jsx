import React from 'react';
import {
    NavLink,
    // Route
} from 'react-router-dom';
import ThirdType from './thirdType';
import Route from '../router/route';

export default class SubType extends React.Component{
    constructor(props){
        super();
        this.state = {
            list: [{
                name: '手机',
                list: ['iphone6s', 'oppo', 'vivo', 'honor', 'xiaomi', 'galaxy', 'smarttin', 'nokie', 'motor']
            }, {
                name: '手机数码',
                list: ['switch', 'ps4', 'mp3', 'mp4', 'camera']
            }, {
                name: '家用电器',
                list: ['小风扇', '小空调', '小电视机', '小洗衣机', '小天鹅', '小霸王']
            }, {
                name: '电脑办公',
                list: ['IMAC', 'lenovo', 'dell', 'asus']
            }]
        }
        this.id = 0;
    }

    componentWillReceiveProps(nextProps){
        this.id = nextProps.match.params.id;
        // console.log('id...', id);
    }

    render(){
        return <div className="subType">
            <div>{
                this.state.list.map((item, index)=>{
                    return <NavLink to={{
                        pathname: `/type/${this.id}/${index}`,
                        params: item.list
                    }} key={index}>{item.name}</NavLink> 
                })
            }</div>
             <Route routes={this.props.routes}></Route>   
            {/* <Route path="/type/:id/:sid?" component={ThirdType}></Route>    */}
        </div>;
    }
}