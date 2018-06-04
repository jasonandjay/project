<template>
  <div id="app">
    <div class="contain">
      <router-view></router-view>
    </div>
    <footer>
      <router-link to="/">
        <div>
          <img src="./assets/img_index.png" alt="">
          <span>首页</span>
        </div>
      </router-link>
      <router-link to="/vip">
        <div>
          <img src="./assets/img_vip.png" alt="">
          <span>会员+</span>
        </div>
      </router-link>
      <router-link to="/shopping">
        <div>
          <img src="./assets/img_shopping.png" alt="">
          <span>购物车</span>
          <em v-if="cartNum">{{cartNum}}</em>
        </div>
      </router-link>
      <router-link to="/my">
        <div>
          <img src="./assets/img_my.png" alt="">
          <span>我的</span>
        </div>
      </router-link>
    </footer>
  </div>
</template>

<script>
import Dispatch from './dispatch.js';
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      carts: []
    }
  },
  computed:{
    cartNum(){
      let num = 0;
      this.carts.forEach((item)=>{
        num += item.count;
      })
      return num;
    }
  },
  mounted(){
    Dispatch.on(this, 'changeCart', res=>{
      console.log('res...', res);
      // 先去读localstorage的数据赋给购物车
      let storage = window.localStorage.getItem('missfresh.carts');
      if (storage){
          storage = JSON.parse(storage);
          this.carts = storage;
      }

      // 合并缓存里的数据和首先添加的数据
      console.log('carts...', this.carts, 'index...', res);
      res.forEach((item)=>{
        let isExist = false;
        this.carts.forEach((value)=>{
          // 如果首页添加的产品购物车里有直接增加数量
          // 如果首页添加的产品购物车里没有，直接添加到购物车里
          if (item.name === value.name){
            isExist = true;
            value.count += item.count;
          }
        })
        if (!isExist){
          this.carts.push(item);
        }
      })

      // 再写入缓存
      window.localStorage.setItem('missfresh.carts', JSON.stringify(this.carts));
    })
  }
}
</script>

<style lang="scss">
@import './scss/_app.scss';
</style>
