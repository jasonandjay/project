<template>
    <div class="index-page" ref="elem">
        <Loading v-if="isShowLoading"/>
        <header>
            <div>
                <span>次日到达</span>
                <span @click="selectCity">{{city}}</span>
            </div>
            <img src="">
        </header>
        <div ref="elemScroll">
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
            <h2 v-myShow="true">今日特卖</h2>
            <ul>
                <li v-for="(item, index) in current_product" :key="index" @click="itemClick(item)">
                    <img :src="item.image" alt="">
                    <div>
                        <p>{{item.name}}</p>
                        <p>{{item.subtitle}}</p>
                        <p>{{item.product_tags && item.product_tags[0].name}}</p>
                        <div>
                            <p>${{item.vip_price_pro && ((item.vip_price_pro.price_up.price)/100).toFixed(2)}}</p>
                            <div>
                                <img v-if="item.showCart" :src="item.cart_image" alt="" @click="clickCart(item)">
                                <div v-else>
                                    <i @click="subCount(index)">-</i>
                                    <span>{{item.count}}</span>
                                    <i @click="addCount(index)">+</i>
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
<style scoped lang="scss">
    @import '../scss/_index.scss';
</style>

<script>
    import axios from 'axios';
    import Dispatch from '../dispatch.js';
    // 引入swiper的样式
    import 'swiper/dist/css/swiper.css';
    // 引入组件swiper 和 swiperSlide
    import { swiper, swiperSlide } from 'vue-awesome-swiper';
    // 引入loading组件
    import Loading from './common/Loading.vue';
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
                isShowLoading: true,
                city: ''
            }
        },
        components: {
            swiper,
            swiperSlide,
            Loading
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
                            // 是否显示购物车
                            item.showCart = true;
                            // 购买数量
                            item.count = 0;
                        })
                        this.current_product = this.product_list.slice(0, 20);
                        this.isShowLoading = false;
                        // 
                    })
            },
            clickCart(item){
                console.log('item...', item);
                this.current_product.forEach((value)=>{
                    if (value.name === item.name){
                        value.showCart = false;
                        value.count = 1;
                    }
                })
                this.$forceUpdate();
                this.changeCart();
            },
            subCount(index){
                if (this.current_product[index].count == 1){
                    this.current_product[index].showCart = true;
                }else{
                    this.current_product[index].count -= 1;
                }
                this.$forceUpdate();
                this.changeCart();
            },
            addCount(index){
                this.current_product[index].count += 1;
                this.$forceUpdate();
                this.changeCart();
            },
            changeCart(){
                let carts = [];
                this.current_product.forEach((item)=>{
                    if (item.count){
                        carts.push(item);
                    }
                })
                Dispatch.emit('changeCart', carts)
            },
            selectCity(){
                this.$router.push({path:'/city'});
            },
            itemClick(item){
                this.$router.push({name:'Item', params:item});
            }
        },
        beforeRouteEnter: (to, from, next) => {
            // ...
            // 判断是否有城市定位信息
            let storage = window.localStorage.getItem('missfresh.city');
            if (storage){
                this.city = storage;
            }
            next();
        },
        mounted(){
            this.init();
            // 判断是否有城市定位信息
            let storage = window.localStorage.getItem('missfresh.city');
            if (storage){
                this.city = storage;
            }
            // 原生代码监听滚动
            // const elem = document.querySelector('.index-page');
            // const elemScroll = document.querySelector('.index-page>div');
            console.log('refs...', this.$refs);
            const elem = this.$refs.elem;
            const elemScroll = this.$refs.elemScroll;
            elem.onscroll = (e)=>{
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