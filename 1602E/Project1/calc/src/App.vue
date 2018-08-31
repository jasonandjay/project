<template>
    <keep-alive>
         <Index :count="num">
             <p>123456</p>
         </Index>
    </keep-alive>
</template>

<script>
    import Index from './components/Index.vue';
    export default{
        data: ()=>{
            return {
                num: 100
            }
        },
        // 注册一下组件
        components: {
            Index
        }
    }
    /* 对比react生命周期和vue的生命周期
        触发时期            Vue             React
        组件创建之前        beforeCreate    无
        组件创建完成        created         constructor
        组件挂载之前        beforeMount     componentWillMount
        组件挂载完成        mounted         componentDidMount       ***
        组件更新之前        beforeUpdate    componentWillUpdate
        组件更新完成        updated         componentDidUpdate

        将要获取props       无              componentWillReceiveProps
        组件是否要更新      无              shouldComponentUpdate
        组件渲染            无              render  

        组件销毁之前        beforeDstory    componentWillUnmount    ***
        组件销毁之后        destoryed       


        组件怎么销毁        v-if为false     用条件表达式不渲染
                           vm.$destory()   unMountComponentAtNode()
    */
</script>
