import React from 'react';
import {Link} from 'react-router-dom';
import '../../scss/attention.css';
import WithTitle from '../hoc/WithTitle';
import WithLoading from '../hoc/WithLoading';

class Gallery extends React.Component{
    constructor(){
        super()
        this.state = {
            list: [],
            loading: true
        }
    }

    componentDidMount(){
        this.laodData();
    }

    laodData(callback=()=>{}){
        this.setState({loading: true});
        fetch('https://www.easy-mock.com/mock/5af6599acf64741ceacf1c57/es6/zhihu/attention', {

        }).then(res=>{
            res.json().then(body=>{
                console.log(body);
                this.setState({
                    list: this.state.list.concat(body.data),
                    loading: false
                }, ()=>{
                    callback();
                })
            })
        })
    }

    componentWillReceiveProps(nextProps){
        if (nextProps.loadMore){
            this.laodData(()=>{
                this.props.finishLoad();
            })
        }
    }

    render(){
        return <div className="attention">{
            this.state.list.map((item, index)=>{
                return <li key={index}>
                    <Link to={{
                        pathname: '/attDetail',
                        data: item
                    }}>    
                        <div>
                            <img src={item.actors[0].avatar_url}/>
                            <span>{item.action_text}</span>
                            <span>· 七分钟前</span>
                        </div>
                        <p>{item.target.question.title}</p>
                        <p style={{"-webkit-box-orient": "vertical"}}>{item.target.excerpt}</p>
                        <div>798赞同·88评论</div>
                    </Link>
                </li>
            })
        }</div>
    }
}

export default WithLoading(Gallery);