import React from 'react';
import {Redirect} from 'react-router-dom';

import axios from 'axios';
export default class Add extends React.Component{
    constructor(){
        super();
    }

    submit(){
        let content = this.refs.content.value;
        if (!content){
            alert('请输入微博内容');
        }else{
            axios.post('http://169.254.239.219:10000/post', {
                uid: this.login.replace('true', ''),
                content
            })
        }
        console.log('content...', content);
    }

    render(){
        let login = this.login = window.sessionStorage.getItem('login');
        if (!/true/.test(login)){
            return <Redirect to="/login"></Redirect>
        }
        return <div>
            <textarea ref='content' id="" cols="30" rows="10">
            </textarea>
            <button onClick={()=>this.submit()}>发表</button>
        </div>
    }
}