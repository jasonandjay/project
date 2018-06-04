<template>
  <div id="app">
    <Navigation :nav="nav" :navChange="navChange"/>
    <ProductList :data="curData"/>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue';
import ProductList from './components/ProductList.vue';
import axios from 'axios';
export default {
  name: 'app',
  data () {
    return {
      // 左边的导航数据
      nav: [],  
      // 右边数据
      curData: [],
      // 全部数据
      data: []
    }
  },
  components: {
    Navigation,
    ProductList
  },
  methods: {
    navChange(res){
      console.log('res...', res);
      this.curData = this.data.list[res-1];
      console.log('curData...', this.curData);
    }
  },
  mounted(){
    axios.get('/getData').then(res=>{
      console.log('res...', res);
      // 获取导航数据
      let nav = [];
      res.data.list.forEach((item)=>{
        nav.push({
          id: item.id,
          name: item.name
        })
      })
      this.nav = nav;
      // 把第一项数据给curData
      this.curData = res.data.list[0];
      // 把所有数据存储在data
      this.data = res.data;
    })
  }
}
</script>

<style lang="scss">
  @import './assets/_reset.scss';
  div#app{
    display: flex;
    height: 100%;
    justify-content: space-between;
  }
  html,body{
    height: 100%;
  }
</style>
