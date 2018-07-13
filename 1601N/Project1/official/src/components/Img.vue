<template>
    <div>
        <div class="img">
            <p class="tit">
                <span>颜色</span>
                <span>车款</span>
            </p>
            <div class="img-list">
                <ul v-for="(item, index) in list" :key="index">
                    <li v-for="(value, key) in item.List" :key="key">
                        <span :style="{'backgroundImage': `url(${value.Url.replace('{0}', value.LowSize)})`}"></span>
                        <p v-if="!key" @click="clickAll(item.Id)">
                            <span>{{item.Name}}</span>
                            <span>{{item.Count}}张></span>
                        </p>
                    </li>
                </ul>
            </div>
        </div>
        <div v-if="showDetail" class="img-detail" @scroll="scrollAll">
            <ul ref="ul">
                <li v-for="(value, key) in categoryList" :key="key">
                    <span @click="clickSwiper(key)" :style="{'backgroundImage': `url(${value.Url.replace('{0}', value.LowSize)})`}"></span>
                </li>
            </ul>
        </div>

        <div v-show="isShowSwiper" class="img-swiper" @click="hideSwiper">
            <swiper :options="swiperOption" ref="mySwiper">
                <!-- slides -->
                <swiper-slide v-for="(item, index) in categoryList" :key="index">
                    <img :src="item.Url.replace('{0}', item.HighSize)">
                </swiper-slide>

                <!-- Optional controls -->
                <div class="swiper-pagination"  slot="pagination"></div>
                <p v-if="isShowSwiper">{{swipe.activeIndex+'/'+(categoryList.length)}}</p>
            </swiper>
        </div>

        <City/>
    </div>
</template>

<script>
import {mapState, mapMutations, mapActions} from 'vuex';
import 'swiper/dist/css/swiper.css';
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import City from './common/City.vue';
export default {
    computed:{
        ...mapState({
            list: state=>state.img.list,
            categoryList: state=>state.img.categoryList,
            showDetail: state=>state.img.showDetail,
            isShowSwiper: state=>state.img.isShowSwiper
        }),
        swiperOption(){
          // some swiper options/callbacks
          // 所有的参数同 swiper 官方 api 参数
          // ...
          return {
                on:{
                    slideNextTransitionEnd: ()=>{
                        if (this.fetchingAll){
                            return;
                        }
                        console.log('切换结束了',this.swipe.activeIndex);
                        if (this.swipe.activeIndex > this.categoryList.length-5){
                            // 加载下一页数据
                            this.fetchingAll = true;
                            this.getCategoryImageList({
                                cb: ()=>{
                                    this.fetchingAll = false
                                }
                            });
                        }
                    },
                },
          }
        },
        swipe() {
            return this.$refs.mySwiper.swiper
        }
    },
    components: {
        swiper,
        swiperSlide,
        City
    },
    methods: {
        ...mapActions({
            getImgList: 'getImgList',
            getCategoryImageList: 'getCategoryImageList'
        }),
        ...mapMutations({
            showAll: 'showAll',
            showSwiper: 'showSwiper'
        }),
        clickAll(id){
            this.showAll(id);
            this.getCategoryImageList();
        },
        hideSwiper(e){
            if (e.target == e.currentTarget){
                this.showSwiper(false);
            }
        },
        clickSwiper(index){
            this.showSwiper(true);
            // console.log('this...', this.$refs);
            // console.log('swiper...', this.swipe);
            this.swipe.slideTo(index);
        },
        scrollAll(e){
            if (this.fetchingAll){
                return;
            }
            let scrollHeight = this.$refs.ul.getBoundingClientRect().height - window.innerHeight;
            let current = e.target.scrollTop;
            console.log('current...', current, scrollHeight);
            if (current > (scrollHeight-20)){
                // 加载下一页数据
                this.fetchingAll = true;
                this.getCategoryImageList({
                    cb: ()=>{
                        this.fetchingAll = false
                    }
                });
            }
        }
    },
    mounted(){
        this.getImgList();
        this.fetchingAll = false;
    }
}
</script>

<style lang="scss" scoped>
    .img{
        height: 100%;
        background: #f4f4f4;
    }
    .tit{
        position: fixed;
        background: #fff;
        top: 0;
        width: 100%;
        height: .8rem;
        -webkit-box-align: center;
        align-items: center;
        box-sizing: border-box;
        // z-index: 99;
    }
    .img-list{
        overflow: hidden;
        position: absolute;
        background: #fff;
        top: .98rem;
        bottom: 0;
        overflow-y: scroll;
        -webkit-overflow-scrolling: touch;
        border-bottom: .4rem solid #f4f4f4;
    }
    ul{
        margin-bottom: .1rem;
        overflow: hidden;
        position: relative;
        p{
            position: absolute;
            top: 0;
            width: 100%;
            height: 100%;
            text-align: center;
            background: rgba(56,90,130,.5);
            span{
                font-size: .28rem;
                margin-top: .8rem;
                color: #fff;
                display: block;
            }
            span:nth-child(2){
                font-size: .26rem;
                margin-top: .2rem;
            }
        }
    }
    li{
        position: relative;
        float: left;
        margin-right: .06rem;
        width: 2.46rem;
        height: 2.46rem;
        padding: 0;
        margin-bottom: .06rem;
        list-style: none;
        &>span{
            width: 100%;
            height: 100%;
            background-size: cover;
            display: inline-block;
        }
    }
    li:nth-child(3n+3){
        margin: 0;
    }
    .img-detail{
        overflow: hidden;
        position: absolute;
        background: #fff;
        top: 0;
        bottom: 0;
        width: 100%;
        overflow-y: scroll;
        -webkit-overflow-scrolling: touch;
        ul{
            border-bottom: .4rem solid #f4f4f4;
            margin: 0
        }
    }
    .img-swiper{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,1);
        display: flex;
        align-items: center;
        img{
            width: 100%;
        }
    }
</style>
