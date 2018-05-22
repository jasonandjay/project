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
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">
@import './scss/_index.scss';
</style>
