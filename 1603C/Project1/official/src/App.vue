<template>
    <div class="container">
        <router-view></router-view>
        <Loading/>
    </div>
</template>

<script>
import {getBrandList, getMakeList} from './api/index.js';
import Loading from '@/components/Loading';
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    Loading
  },
  mounted(){
      getBrandList().then(res=>{
          console.log('res...', res);
      });
      getMakeList(9).then(res=>{
          console.log('makeList...', res);
      })
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
.container{
    /* height: 100%; */
}
</style>
