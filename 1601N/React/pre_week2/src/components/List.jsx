import React from 'react';
import {
    Route,
    Link
} from 'react-router-dom';


export default class List extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            list: [],
            firstSelect: 0,
            secondSelect: 0
        }
    }

    componentDidMount(){
        fetch('/index').then(res=>{
            res.json().then(body=>{
                console.log('body', body);
                this.setState({
                    list: body
                })
            })
        })
    }

    render(){
        // return null;
        if (!this.state.list.length){
            return null;
        }
        // let list = this.state.list[this.state.firstSelect].list[this.state.secondSelect].list;
        return <div className="list"><ul>{
            this.state.list.map((item, index)=>{
                return <Link to={`/${index}`} key={index} className={index===this.state.firstSelect?'active':''}>{item.name}</Link>
            })
        }</ul>
        <Route path="/:id?" render={({match})=>{
            let id = match.params.id || 0;
            let list  = this.state.list[id].list;
            return list.map((item, index)=>{
                return <Link to={`/${id}/${index}`} key={index} className={index===this.state.secondSelect?'active':''}>{item.name}</Link>
            })
        }}></Route>
        <Route path="/:id?/:sid?" render={({match})=>{
            let id = match.params.id || 0,
                sid = match.params.sid || 0;
            let list = this.state.list[id].list[sid].list;
            return list.map((item, index)=>{
                return <Link to={{
                    pathname: '/detail',
                    data: item
                }} key={index}>
                    <img src={item.img} alt=""/>
                    <div>
                        <p>{item.name}</p>
                        <p>{item.desc}</p>
                    </div> 
                </Link>
            })
        }}/>
       </div>
    }
}

{/* <div>{
    this.state.list[this.state.firstSelect].list.map((item, index)=>{
        return <span key={index} className={index===this.state.secondSelect?'active':''}>{item.name}</span>
    })
}</div><ul>{
    list.map((item, index)=>{
        return <li key={index}>
            <img src={item.img}/>
            <div>
                <p>{item.name}</p>
                <p>{item.desc}</p>
            </div> 
        </li>
    })
}</ul> */}