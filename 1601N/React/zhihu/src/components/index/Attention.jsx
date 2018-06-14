import React from 'react';
import '../../scss/attention.css';

export default class Gallery extends React.Component{
    constructor(){
        super()
        this.state = {
            list: []
        }
    }

    componentDidMount(){
        this.laodData();
    }

    laodData(callback=()=>{}){
        fetch('https://www.easy-mock.com/mock/5af6599acf64741ceacf1c57/es6/zhihu/attention', {

        }).then(res=>{
            res.json().then(body=>{
                console.log(body);
                this.setState({
                    list: this.state.list.concat(body.data)
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
                    <div>
                        <img src={item.actors[0].avatar_url}/>
                        <span>{item.action_text}</span>
                        <span>· 七分钟前</span>
                    </div>
                    <p>{item.target.question.title}</p>
                    <p>{item.target.excerpt}</p>
                    <div>798赞同·88评论</div>
                </li>
            })
        }</div>
    }
}