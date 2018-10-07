<template>
  <section>
    <el-carousel>
      <el-carousel-item v-for="(item, index) in swiper" :key="index">
        <img :src="item.image_url">
      </el-carousel-item>
    </el-carousel>
    <div class="img">

    </div>
  </section>
</template>

<script>
  export default {
    props: {
      swiper: {
        // props的类型检查
        type: Array,
        // props的默认值
        default: []
      }
    },
    updated() {
      console.log('swiper...', this.swiper);
    }
  }
</script>

<style scoped>
  .el-carousel{
    width: 50%;
  }
  img{
    width: 100%;
  }
  .img{
    width: 100px;
    height: 100px;
    border: 1px solid red;
    /* background-repeat: no-repeat; */
    /* background-image: url('http://img.manhua.weibo.com/client/2018/01/30/CRfhU5WD.jpg'); */
    /* background-size: cover; */
    background-size: contain;
    /* background-position:center; */
    background: url('http://img.manhua.weibo.com/client/2018/01/30/CRfhU5WD.jpg') no-repeat 0 0/100% center center;
  }
</style>
