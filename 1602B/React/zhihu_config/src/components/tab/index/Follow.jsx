import React from 'react';
import {NavLink} from 'react-router-dom';
import '../../../scss/follow.css';
import withLoading from '../../hoc/withLoading';

class Follow extends React.Component{
    constructor(){
        super();
        this.state = {
            list: [],
            fetching: true
        }
    }

    componentDidMount(){
        fetch('https://www.easy-mock.com/mock/5b3dd1e253213d0beaa7cd49/api/question')
        .then(res=>{
            return res.json();
        })
        .then(body=>{
            console.log('body: ', body);
            this.setState({
                list: body.data,
                fetching: false
            })
        })
    }

    render(){
        let detail = window.sessionStorage.getItem('detail');
        if (detail){
            detail = JSON.parse(detail);
            console.log('detail', detail);
        }
        return <div className="follow">{
            this.state.list.map((item, index)=>{
                if (detail && (item.id === detail.id)){
                    item = detail;
                }
                return <li key={index}>
                    <NavLink to={{
                        pathname: '/detail',
                        data: item
                    }}>
                        <div>
                            <img src={item.target.author.avatar_url}/>
                            <span>{item.target.author.name}</span>
                        </div>
                        <p style={{WebkitBoxOrient: 'vertical'}}>{item.target.excerpt}</p>
                        <div>
                            <span>赞同 · {item.target.voteup_count}</span>
                            <span>    评论 · {item.target.comment_count}</span>
                        </div>
                    </NavLink>
                </li>
            })
        }</div>
    }
}


export default withLoading(Follow);