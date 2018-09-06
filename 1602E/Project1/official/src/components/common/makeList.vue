<template>
    <section :class="isShowList?'mask active':'mask'"
        ref="section"
        @touchstart="touchstart"
        @touchmove="touchmove"
        @touchend="touchend">
        <ul v-for="(item, index) in makeList" :key="index">
            <p>{{item.GroupName}}</p>
            <li v-for="(value, key) in item.GroupList" :key="key" @click="goDetail(value.SerialID)">
                <img :data-src="value.Picture" src="../../assets/black.jpg">
                <div>
                    <p>{{value.AliasName}}</p>
                    <p>{{value.DealerPrice}}</p>
                </div>
            </li>
        </ul>
    </section>
</template>
<script>
    import {mapState, mapMutations} from 'vuex';
    import lazyLoad from '../../util/lazyLoad.js';
    export default{
        computed: {
            ...mapState({
                makeList: state=>state.index.makeList,
                isShowList: state=>state.index.isShowList
            })
        },
        methods: {
            ...mapMutations({
                hideMakeList: 'index/hideMakeList'
            }),
            touchstart(e){
                this.offsetX = 0;
                this.touch  = e.touches[0];
            },
            touchmove(e){
                let touch = e.touches[0];
                this.offsetX = touch.pageX - this.touch.pageX;
                if (this.offsetX > 0){
                    this.$refs.section.style = `transform:translate3d(${this.offsetX}px, 0, 0)`;
                }
                console.log('滑动距离：', this.offsetX, this.$refs.section);
            },
            touchend(e){
                this.$refs.section.style = ``;
                console.log('offsetX...', this.offsetX);
                if (this.offsetX > 100){
                    this.hideMakeList();
                }
            },
            goDetail(id){
                this.$router.push({path: '/detail', query: {id}})
                // this.$router.push({name: 'Detail', params: {id}})
            }
        },
        updated() {
            lazyLoad('.mask');
        },
    }
</script>
<style scoped lang="scss">
.mask{
    position: fixed;
    right: 0;
    top: 0;
    width: 72%;
    height: 100%;
    overflow: scroll;
    background: #fff;
    transform: translate3d(100%, 0, 0);
    box-shadow: -3px 0px 10px 0px rgba(0,0,0,.1);
    ul>p{
        margin-left: 1px;
        font-size: .28rem;
        line-height: .48rem;
        background: #f2f2f2;
        padding-left: .3rem;
        color: #717171;
    }
    ul{
        margin-left: .1rem;
    }
    li{
        height: 1.4rem;
        box-sizing: border-box;
        border-bottom: 1px solid #ddd;
        display: flex;
        align-items: center;
        p:nth-child(1){
            font-size: .34rem;
            color: #5f687a;
        }
        p:nth-child(2){
            margin-top: .1rem;
            font-size: .28rem;
            color: red;
        }
    }
    img{
        margin: 0 .1rem 0 .2rem;
        width: 1.8rem;
        height: 1.2rem;
    }
}
.mask.active{
    transform: translate3d(0,0,0);
    transition: transform .3s linear;
}
</style>

