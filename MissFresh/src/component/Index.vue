<template>
    <div>
        <div>
            <swiper :options="swiperOption">
                <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
                    I'm Slide {{ slide }}
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    // 引入swiper的样式
    import 'swiper/dist/css/swiper.css'
    // 引入组件swiper 和 swiperSlide
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    export default {
        data(){
            return {
                swiperOption: {},   //swiper配置
                swiperSlides: [],   //swiper元素
            }
        },
        components: {
            swiper,
            swiperSlide
        },
        methods: {
            init(){
                axios.get('/index/index')
                    .then(res=>{
                        console.log('res..', res);
                    })
            }
        },
        mounted(){
            this.init();
        }
    }
</script>