import React from 'react';
import page from './hoc/page';

class List extends React.Component{
    constructor(){
        super();
    }

    pageChange(page){
        console.log('当前是第多少页...', page);
    }

    render(){
        return <p>我是List</p>
    }
}

export default page(List);