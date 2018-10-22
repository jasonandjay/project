<template>
    <div class="wrap" @scroll11="scroll" ref="wrap">
        <!-- 详细图片列表 -->
        <section ref="section" @click="imgClick">
            <!-- <span v-for="(item, index) in imgList" :key="index" :style="{'background-image':`url(${item.Url.replace('{0}', item.LowSize)})`}"></span> -->
            <img v-for="(item, index) in imgList" src="src/assets/default.png" :key="index" :data-src="`${item.Url.replace('{0}', item.LowSize)}`" :data-id="index"/>
        </section>
        <!-- 轮播图片 -->
        <section class="swiper" v-show="showSwiper" @click="swiperClick">
            <swiper :options="swiperOption" ref="mySwiper">
                <!-- slides -->
                <swiper-slide v-for="(item, index) in imgList" :key="index">
                    <img :data-src="`${item.Url.replace('{0}', item.HighSize)}`" class="swiper-lazy"/>
                    <div class="swiper-lazy-preloader"></div>
                </swiper-slide>
                <!-- Optional controls -->
                <div class="swiper-pagination"  slot="pagination"></div>
            </swiper>
            <p>{{`${1+current*1}/${imgList.length}`}}</p>
        </section>
    </div>
</template>

<script>
import {mapState,mapActions,mapMutations} from 'vuex';
import {lazyLoad} from '@/utils/lazyLoad';
import {debounce} from '@/utils/utils';
// 引入swiper
import 'swiper/dist/css/swiper.css';
import { swiper, swiperSlide } from 'vue-awesome-swiper';
export default {
    computed: {
        ...mapState({
            imgList: state=>state.img.imgList,
            isFetching: state=>state.img.isFetching,
            Page: state=>state.img.Page,
            current: state=>state.img.current,
            showSwiper: state=>state.img.showSwiper
        }),
        swiperOption(){
            let that = this;
            return {
                lazy: {
                    // loadPrevNext: true,
                },
                on: {
                    slideChange: function(){
                        if (this.activeIndex > (that.Page-1)*30-5){
                            that.getImgList({
                                SerialID: 2593,
                                ImageID: 6
                            });
                        }
                        that.changeSwiper({
                            id: this.activeIndex,
                            show: true
                        })
                    },
                },
            }
        },
        swiper() {
            return this.$refs.mySwiper.swiper
        }
    },
    components: {
        swiper,
        swiperSlide
    },
    methods: {
        ...mapActions({
            getImgList: 'img/getCategoryImgList'
        }),
        ...mapMutations({
            changeSwiper: 'img/changeSwiper'
        }),
        // 监听列表滚动
        scroll(){
            let scrollTop = this.$refs.wrap.scrollTop;
            let height = this.$refs.section.getBoundingClientRect().height;
            console.log(scrollTop, (height-window.innerHeight));
            if ((scrollTop > ((height-window.innerHeight) - 20)) && !this.isFetching){
                // 执行加载下一页的逻辑
                console.log('加载下一页');
                this.getImgList({
                    SerialID: 2593,
                    ImageID: 6
                })
            }
        },
        // 图片点击
        imgClick(e){
            let id = e.target.dataset.id;
            this.changeSwiper({
                id,
                show: true
            });
            this.swiper.slideTo(id, 1000, false)
        },
        // swiper点击
        swiperClick(e){
            if (e.target == e.currentTarget){
                this.changeSwiper({
                    show:false
                })
            }
        }
    },
    updated(){
        if (this.Page == 2 && this.imgList.length){
            lazyLoad('.wrap');
        }
    },
    mounted(){
        this.getImgList({
            SerialID: 2593,
            ImageID: 6
        });

        // let func = this.scroll;
        let func = debounce(this.scroll, 100);
        this.$refs.wrap.addEventListener('scroll', func);
    }
}
</script>

<style lang="scss" scoped>
section:first-child{
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    span,img{
        width: 2.46rem;
        height: 1.64rem;
        // height: 2.46rem;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
    }
}
.wrap{
    height: 100%;
    overflow-y: scroll;
}
.swiper{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 101;
    background: rgba(0,0,0,1);
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        width: 100%;
        height: 5rem;
        border: none;
    }
    p{
        position: absolute;
        bottom: .5rem;
        left: 0;
        color: #fff;
        font-size: .34rem;
        text-align: center;
        width: 100%;
    }
}
.swiper-lazy-preloader{
    color: red;
}
</style>
