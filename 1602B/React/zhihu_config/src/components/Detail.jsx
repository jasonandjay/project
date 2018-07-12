import React from 'react';

export default class Detail extends React.Component{
    constructor(props){
        super();
        if (props.location && props.location.data){
            window.sessionStorage.setItem('detail', JSON.stringify(props.location.data))
        }
        this.state = {
            item: {}
        }
    }

    componentDidMount(){
        let item = this.props.location && this.props.location.data;
        if (!item){
            item = JSON.parse(window.sessionStorage.getItem('detail'));
        }
        console.log(item);
        this.setState({item})
    }

    click(){
        let {item} = this.state;
        item.target.voteup_count++;
        this.setState({item}, ()=>{
            window.sessionStorage.setItem('detail', JSON.stringify(this.state.item));
        });
    }

    render(){
       let item = this.state.item;
       if (!Object.keys(item).length){
           return null;
       }
        return <div>
            <div>{item.target.excerpt}</div>
            <div>
                <span onClick={()=>this.click()}>点赞 · {item.target.voteup_count}</span>
                <span>    评论 · {item.target.comment_count}</span>
            </div>
        </div>
    }
}
