<template>
  <div id="app">
    <!-- <router-view/> -->
    <router-view></router-view>
    <router-link to='/'>首页</router-link>
    <router-link to='/message/1'>消息页</router-link>
    <router-link to='/shopping'>购物车</router-link>
    <router-link to='/my/wallet'>我的钱包</router-link>
    <router-link to='/my/order'>我的订单</router-link>
    <router-link to='/my/order/complete'>已完成订单</router-link>
    <router-link to='/my/order/pennding'>未完成订单</router-link>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted: function(){
    console.log('route redirect...', )
    // this.$router.push({path:'/message', query:{x:1,y:2}})
    this.$router.push({name:'Message', params:{a:3,b:4}})
    // this.$router
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
