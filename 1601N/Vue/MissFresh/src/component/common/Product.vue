<template>
    <div class="item">
        <li @touchstart="touchstart" @touchmove="touchmove" @touchend="touchend"
        :style="{transform: style}"> 
            <input type="checkbox" v-model="item.checked" @change="selectItem(item)">
            <img :src="item.image">
            <div>
                <p>{{item.name}}</p>
                <p>{{item.product_tags && item.product_tags[0].name}}</p>
                <div>
                    <p>${{item.vip_price_pro && ((item.vip_price_pro.price_up.price)/100).toFixed(2)}}</p>
                    <div>
                        <i @click="subCount(index)">-</i>
                        <span>{{item.count}}</span>
                        <i @click="addCount(index)">+</i>
                    </div>
                </div>
            </div>
        </li>
        <button v-if="showDelete">删除</button>
    </div>
</template>

<style lang="scss" scoped>
    @import '../../scss/_shopping.scss';
    .item{
        position: relative;
    }
    button{
        position: absolute;
        right: 0;
        top: 40%;
        color: red;
    }
    li{
        transition: transform .1s ease;
    }
</style>

<script>
    export default {
        data(){
            return {
                // 初始触摸的位置
                initTouch: {},
                // 实时移动到的位置
                touch: {},
                // X方向上滚动距离
                touchX: 0,
                // css要滚动的距离
                translateX: 0,
                // 样式
                style: 'translate3d(0,0,0)',
                // 是否显示删除按钮
                showDelete: false
            }
        },
        methods: {
            touchstart(e){
                // console.log('e...', e);
                this.initTouch = e.touches[0];
            },
            touchmove(e){
                // console.log('touchmove...', e);
                let touchX = 0,
                    touchY = 0;
                // X方向上滑动的距离
                this.touchX = e.touches[0].pageX - this.initTouch.pageX;

                let x = this.translateX+this.touchX;
                // 要显示删除按钮
                if (x < -100){
                    x = -100;
                    this.showDelete = true;
                    // 显示删除按钮
                    console.log('显示删除按钮');
                }else if(x > 0){
                    return;
                }else{
                    x = 0
                    this.showDelete = false;
                }
                // 设置滚动样式
                this.style = `translate3d(${parseInt(x)}px,0,0)`;
                console.log('touch...', this.touchX, touchY, this.style);
                this.touch = e.touches[0];
                // this.$forceUpdate();
            },
            touchend(){
                this.translateX = this.touchX;
            }
        },
        props: {
            item: {
                type: Object,
                default: {}
            },
            index: '',
            subCount: '',
            addCount: '',
            selectItem: ''
        }
    }
</script>