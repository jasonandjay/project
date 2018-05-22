<template>
  <div id="app">
    <!-- <router-view/> -->
    <div class='router'>
      <!--给路由切换加载动画
      mode 切换模式
        out-in 前一个页面先消失，后一个页面再进入
        in-out 后一个页面先进入，前一个页面再消失
        ''     两个动画同时执行
      name 添加css的名字
      -->
      <transition name="trans" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
    <div class='footer'>
      <router-link to='/'>首页</router-link>
      <router-link to='/message/1000'>消息页</router-link>
      <router-link to='/shopping'>购物车</router-link>
      <router-link to='/my'>我的</router-link>
    </div>
    

    <!-- <div @click='back'>回退一步</div> -->
    <!-- <div @click="replace">替换历史</div> -->
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    back(){
      // this.$router.go(1);
      this.$router.forward();
      // this.$router.back();
    },
    replace(){
      // 不会向history添加纪录，用于无痕浏览
      this.$router.replace({name:'Shopping', params:{a:3,b:4}}, ()=>{
        console.log('替换了当前页面...');
      });
    }
  },
  mounted: function(){
    console.log('route redirect...', )


    // 通过路径跳转
    // this.$router.push({path:'/message', query:{x:1,y:2}})
    // 通过路由name跳转
      // this.$router.push({name:'Shopping', params:{a:3,b:4}});      
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
.footer{
  /* position: fixed; */
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  height: 40px;
  justify-content: space-around;
}
a{
  border: 1px solid;
}
#app{
  display: flex;
  flex-direction: column;
}
html,body,#app{
  height: 100%;
  margin: 0;
}
.router{
  flex: 1;
  margin-bottom: 40px;
  background: lightgoldenrodyellow
}

.trans-enter-active,.trans-leave-active{
  transition: transform .3s ease
}
.trans-enter{
  transform: scale(1.5)
}
.trans-leave-to{
  transform: scale(0.5)
}
</style>
