import React, { Component } from 'react';
import Swiper from 'swiper/dist/js/swiper.min.js';
import 'swiper/dist/css/swiper.min.css';
import {NavLink} from 'react-router-dom';
import Loading from '../../../common/Loading';
import withLoading from '../../../hoc/withLoading';

class Current extends Component {
    constructor(props){
        super(props);
        this.state = {
            ads: [],
            list: [],
            showLoading: true
        }
    }

    componentDidMount(){
        // 获取电影列表
        fetch('/data.json')
        .then(res=>res.json())
        .then(body=>{
            console.log('body..', body);
            this.setState({
                list: body.data.returnValue,
                showLoading: false
            })
        })

        // 获取banner列表
        fetch('/ad.json')
        .then(res=>res.json())
        .then(body=>{
            console.log('ad...', body);
            this.setState({
                ads: body.data.returnValue
            }, ()=>{
                new Swiper('.swiper-container', {
                    autoplay: true,//可选选项，自动滑动
                    pagination: {
                        el: '.swiper-pagination',
                    },
                })
            })
        })

    }


    render() {
        return <div className="current">
            <div className="swiper-container">
                <div className="swiper-wrapper">{
                    this.state.ads.map((item, index)=>{
                        return <div className="swiper-slide" key={index}>
                            <span style={{backgroundImage:'url("https://gw.alicdn.com/'+item.bigPicUrl+'")'}}/>   
                        </div> 
                    })
                }<div className="swiper-pagination"></div>
                </div>
            </div>
            <section>{
                    this.state.list.map((item, index)=>{
                        return <NavLink to={{
                            pathname: '/detail',
                            state: item
                        }} key={index}>
                            <img src={`https://gw.alicdn.com/${item.poster}`} />
                            <div>
                                <span>{item.showName}</span>
                            </div>
                        </NavLink>
                    })
                }</section>
            {/* {this.state.showLoading?<Loading></Loading>:null} */}
        </div>  
    }
}


export default withLoading(Current)