<template>
    <div class="index-page">
        <div>
            <nav>
            <div>
                <div>
                    <span v-for="(item, index) in category_list" :key="index">{{item.name}}</span>
                </div>
            </div>
            <img src="" alt="">
        </nav>
        <div class='swiper'>
            <swiper :options="swiperOption">
                <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
                    <img :src="slide.path">
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </div>
        <div class="product">
            <h2>今日特卖</h2>
            <ul>
                <li v-for="(item, index) in current_product" :key="index">
                    <img :src="item.image" alt="">
                    <div>
                        <p>{{item.name}}</p>
                        <p>{{item.subtitle}}</p>
                        <p>{{item.product_tags && item.product_tags[0].name}}</p>
                        <div>
                            <p>${{item.vip_price_pro && ((item.vip_price_pro.price_up.price)/100).toFixed(2)}}</p>
                            <div>
                                <img v-if="item.showCart" :src="item.cart_image" alt="">
                                <div v-else>
                                    <img src="" alt="">
                                    <span></span>
                                    <img src="" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
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
                // 导航列表
                category_list:[],
                //swiper配置
                swiperOption: {
                    autoplay: true,
                    loop: true,
                    pagination: {
                        el: '.swiper-pagination',
                    }
                },   
                //swiper元素
                swiperSlides: [],
                // 所有产品数据
                product_list: [],
                // 当前显示产品列表
                current_product: [],
                // 当前显示页面
                current_page: 1,
                // 是否在加载数据，就是一个锁
                isLoading: false,
            }
        },
        components: {
            swiper,
            swiperSlide
        },
        methods: {
            init(){
                axios.get('/index/data')
                    .then(res=>{
                        console.log('res..', res);
                        this.swiperSlides = res.data.product_list.banner;
                        this.category_list = res.data.category_list;
                        this.product_list = res.data.product_list.products.slice(1);
                        this.product_list.forEach((item)=>{
                            item.showCart = true;
                        })
                        this.current_product = this.product_list.slice(0, 20);
                        // 
                    })
            }
        },
        mounted(){
            this.init();
            // 原生代码监听滚动
            const elem = document.querySelector('.index-page');
            const elemScroll = document.querySelector('.index-page>div');
            elem.onscroll = (e)=>{
                console.log('e...', e, elem.scrollTop, elemScroll.clientHeight, elemScroll.clientHeight-document.documentElement.clientHeight);
                if (this.isLoading){
                    return;
                }
                if (elem.scrollTop > (elemScroll.clientHeight-document.documentElement.clientHeight-30)){
                    console.log('加载下一页');
                    this.isLoading = true;
                    // 请求数据
                    this.current_page += 1;
                    this.current_product = this.current_product.concat(this.product_list.slice((this.current_page-1)*20, this.current_page*20));
                    this.isLoading = false;
                }
            }
        }
    }
</script>