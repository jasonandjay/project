<template>
    <div class="index">
        <section class="car-list" ref="carList" @click="brandClick">
            <ul v-for="(item, index) in brandList" :key="index">
                <p :ref="index">{{index}}</p>
                <div>
                    <li v-for="(value, key) in item" :key="key" :data-id="value.MasterID">
                        <img :src="value.CoverPhoto" :alt="value.Name">
                        <span>{{value.Name}}</span>
                        <img v-if="value.tagurl" :src="value.tagurl.replace('http','https')">
                    </li>
                </div>
            </ul>
        </section>
        <section class="letters" ref="letters"
            @touchstart="touchStart"
            @touchmove="touchMove"
            @touchend="touchEnd">
            <h6 v-for="(item, index) in letters" :key="index">
                {{item}}
            </h6>
        </section>
    </div>
</template>
<script>
    import {mapState, mapActions} from 'vuex';
    export default{
        name: 'Index',
        computed: {
            ...mapState({
                letters: state=>state.index.letters,
                brandList: state=>state.index.brandList
            })
        },
        methods: {
            ...mapActions({
                getBrandList: 'index/getBrandList',
                getMakeList: 'index/getMakeList'
            }),
            touchStart(){

            },
            touchMove(e){
                // 计算字母下标
                let index = Math.floor((e.touches[0].pageY - this.offsetTop)/this.letterHeight);
                // 处理下临界值
                if (index < 0){
                    index = 0;
                }else if (index > this.letters.length-1){
                    index = this.letters.length-1;
                }
                // 计算当前划到哪个字母
                let letter = this.letters[index];
                // 计算要滚动的距离
                let offsetTop = this.$refs[letter][0].offsetTop;
                // 滚动元素到对应位置
                this.$refs.carList.scrollTop = offsetTop;
            },
            touchEnd(){

            },
            // 品牌点击
            brandClick(e){
                let target = null;
                if (e.target.tagName == 'IMG' || e.target.tagName == 'SPAN'){
                    target = e.target.parentNode;
                }else if (e.target.tagName == 'LI'){
                    target = e.target;
                }

                if (target){
                    let id = target.dataset.id;
                    console.log('id...', target, id);
                    this.getMakeList(id);
                }
            }
        },
        updated(){
             // 获取字母列表距离顶部的高度
            this.offsetTop = this.$refs.letters.getBoundingClientRect().top;
            this.letterHeight = this.$refs.letters.children[0].getBoundingClientRect().height;
        },
        mounted(){
            this.getBrandList();
        }
    }
</script>
<style scoped lang="scss">
// $color: #000;
// @mixin size($w, $h){
//     width: $w;
//     height: $h;
// }
.index{
    height: 100%;
}
.letters{
    // @include size(100px, 200px);
    // color: $color;
    position: fixed;
    top: 50%;
    right: 0;
    transform: translate3d(0, -50%, 0);
    z-index: 99;
    padding-left: .2rem;
    h6{
        font-size: .24rem;
        color: #666;
        font-weight: 500;
        padding: .02rem .1rem;
    }
}
.car-list{
    height: 100%;
    overflow-y: scroll;
}
ul{
    &>p{
        font-size: .28rem;
       line-height: .4rem;
        background: #f4f4f4;
        padding-left: .3rem;
        color: #aaa;
    }
    div{
        margin: 0 .3rem;
        li{
            display: flex;
            align-items: center;
            height: 1rem;
            box-sizing: border-box;
            border-bottom: 1px solid #ddd;
            justify-content: space-between;
        }
        img:first-child{
            height: .8rem;
        }
        span{
            font-size: .32rem;
            margin-left: .4rem;
            flex: 1;
        }
        img:last-child{
            height: .36rem;
        }
    }
}
</style>

