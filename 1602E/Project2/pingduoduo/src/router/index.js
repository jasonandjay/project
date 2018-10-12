import React from 'react';

// import IndexPage from '../routes/IndexPage';
import DetailPage from '../routes/DetailPage';

import TabPage from '../routes/TabPage';
// const IndexPage = ()=>{
//   return <h2>我是首页</h2>
// }
class IndexPage extends React.Component{
  render(){
    return <h2>我是首页</h2>
  }
}
// const IndexPage = React.createClass({
//   getInitialState(){
//     return {
//       list:[]
//     }
//   },
//   getDefaultProps(){
//     return {
//       func: ()=>{

//       }
//     }
//   },
//   render(){
//     return <h2>我是首页</h2>
//   }
// })
const SearchPage = ()=>{
  function ref(){
    console.log('refs执行');
  }
  return <div>
    <IndexPage ref={ref}/>
  </div>
}
const RecommendPage = ()=>{
  return <h2>我是推荐</h2>
}
const ChatPage = ()=>{
  return <h2>我是聊天</h2>
}
const MinePage = ()=>{
  return <h2>我是个人中心</h2>
}

export default {
  routes: [{
    path: '/tab',
    component: TabPage,
    children: [{
      path: '/tab/index',
      component: IndexPage
    },{
      path: '/tab/search',
      component: SearchPage
    },{
      path: '/tab/chat',
      component: ChatPage
    },{
      path: '/tab/mine',
      component: MinePage
    },{
      path: '/tab/recommend',
      component: RecommendPage
    }]
  },{
    path: '/detail',
    component: DetailPage,
    children: [{
      path: '/detail/home',
      component: ()=><h1>detail 100</h1>
    }]
  }]
}
