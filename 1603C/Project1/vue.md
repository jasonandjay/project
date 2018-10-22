### 生命周期对比

|  |Vue|             React                 | MiniApp|
|---|---|---|----| 
|   小程序的创建之前 |            ||                        onLaunch
|  创建之前         |   beforeCreate |                   
|  创建完成          |  created       |  constructor     |       onLoad(options)
| 挂载之前|            beforeMount|     componnentWillMount
| 挂载完成之后 |       mounted      |   componentDidMount    |   onReady
| props更新||componentWillReceiveProps
| 是否需要更新  | |                                shouldCompoentUpdate
| 更新之前       |     beforeUpdate  |  componentWillUpdate
| 更新之后        |    updated        | componentDidUpdate
| 卸载之前         |   beforeDestory | componentWillunMount | onUnload
| 卸载之后          |  destoryed       |  
| 组件激活（只适用keep-alive）| actived | | onshow
| 组件停用（只使用keep-alive）| disactived | | onhide
| 渲染组件| |render 

#### 卸载组件React
- 挂载在dom节点：
        ReactDOM.render(<Component/>, "#app");
        unMountComponentAtNode(选择器)
- 在组件中使用组件:  
        不渲染即可

#### 卸载组件Vue
- 使用vm实例:
    vm.$destory()
- 在组件中使用：
    不渲染即可
00000
000000

00000000