// 非侵入式的
export default (component)=>{
  return class extends React.Component{
    render(){
      <div>
        <h3>我是高阶组件注入的标题</h3>
        <component></component>
      </div>
    }
  }
}

// 侵入式的
export default (component)=>{
  return class extends component{
    render(){
      <div>
        <h3>我是高阶组件注入的标题</h3>
        {super.render()}
      </div>
    }
  }
}
