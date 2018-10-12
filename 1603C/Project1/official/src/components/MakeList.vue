<template>
    <section ref="makeList" class="make-list"
        @touchstart="touchStart"
        @touchmove="touchMove"
        @touchend="touchEnd">
        <ul v-for="(item, index) in makeList" :key="index" @click="makeClick">
            <p>{{item.GroupName}}</p>
            <div>
                <li v-for="(value, key) in item.GroupList" :key="key" :data-id="value.SerialID">
                    <img :src="value.Picture">
                    <div>
                        <p>{{value.AliasName}}</p>
                        <p>{{value.DealerPrice}}</p>
                    </div>
                    <img v-if="value.tagurl" :src="value.tagurl">
                </li>
            </div>
        </ul>
    </section>
</template>

<script>
export default {
    props: {
        makeList: {
            type: Array,
            default: []
        },
        hideMakeList: {
            type: Function,
            default: ()=>{}
        }
    },
    methods: {
        makeClick(e){
            let target = null;
            if (e.target.tagName == 'IMG' || e.target.tagName == 'DIV'){
                target = e.target.parentNode;
            }else if(e.target.tagName == 'P'){
                target = e.target.parentNode.parentNode;
            }else if(e.target.tagName == 'LI'){
                target = e.target;
            }
            if (target){
                this.$router.push({
                    path:'/detail',
                    query: {
                        serialID: target.dataset.id
                    }
                });
            }
        },
        touchStart(e){
            // 记录手指滑动的位置
            this.start = e.touches[0];
        },
        touchMove(e){
            // 让页面跟随手指滑动
            let touch = e.touches[0];
            let offset = touch.pageX - this.start.pageX;
            console.log('offset..', offset);
            if (offset < 0){
                offset = 0;
            }
            this.offset = offset;
            this.$refs.makeList.style.transform = `translate3d(${offset}px,0,0)`;
            this.$refs.makeList.style.transition = `width`;
        },
        touchEnd(){
            // 清除行内样式
            this.$refs.makeList.style.transform = ``;
            this.$refs.makeList.style.transition = ``;
            // 判断滑动距离是否到关闭的临界值
            if (this.offset >= window.innerWidth * 0.35){
                this.hideMakeList();
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    ul>p{
        margin-left: 1px;
        font-size: .28rem;
        line-height: .48rem;
        background: #f2f2f2;
        padding-left: .3rem;
        color: #717171;
    }
    .make-list{
        position: fixed;
        z-index: 101;
        right: 0;
        top: 0;
        height: 100%;
        background: #fff;
        overflow-y: scroll;
        // ios上滑动卡顿
        -webkit-overflow-scrolling: touch;
        width: 75%;
        transform: translate3d(100%, 0, 0);
        transition: all .3s linear;
    }
    li{
        height: 1.4rem;
        box-sizing: border-box;
        border-bottom: 1px solid #ddd;
        display: flex;
        align-items: center;
        img{
            margin: 0 .1rem 0 .2rem;
            width: 1.8rem;
            height: 1.2rem;
        }
        p:nth-child(1){
            font-size: .34rem;
            color: #5f687a;
        }
        p:nth-child(2){
            margin-top: .1rem;
            font-size: .28rem;
            color: red;
        }
        img:last-child{
            width: 1rem;
            height: auto;
        }
    }
</style>
