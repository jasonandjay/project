import React from 'react';

export default class Gallery extends React.Component{
    constructor(){
        super()
        this.state = {
            list: []
        }
    }

    componentDidMount(){
        fetch('https://www.easy-mock.com/mock/5af6599acf64741ceacf1c57/es6/zhihu/attention', {

        }).then(res=>{
            res.json().then(body=>{
                console.log(body);
                this.setState({
                    list: body.data
                })
            })
        })
    }

    render(){
        return <div>{
            this.state.list.map((item, index)=>{
                return <li>
                    <div>
                        <img src={item.actors[0].avatar_url}/>
                        <span>{item.action_text}</span>
                        <span>· 七分钟前</span>
                    </div>
                    <p>{item.target.question.title}</p>
                    <p>{item.target.preview_text}</p>
                    <div>798赞同·88评论</div>
                </li>
            })
        }</div>
    }
}