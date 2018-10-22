<template>
    <div class="container">
        <router-view></router-view>
        <Loading/>
        <!-- <div class="alert">
            <div>
                <h3>dev.chelun.com</h3>
                <p>1</p>
                <button>确定</button>
            </div>
        </div> -->
    </div>
</template>

<script>
import Loading from '@/components/Loading';
export default {
  name: 'app',
  components:{
    Loading
  }
}
</script>

<style lang="scss">
@import './styles/common.scss';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.container{
    height: 100%;
}
</style>
