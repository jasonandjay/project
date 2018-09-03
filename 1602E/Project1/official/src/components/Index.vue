<template>
    <div class="index">
        <div class="wrap">
            <section>
                <div v-for="(item, index) in brand" :key="index">
                    <ul>
                        <p :id="index">{{index}}</p>
                        <li v-for="(value, key) in item" :key="key">
                            <img :src="value.CoverPhoto">
                            <span>{{value.Name}}</span>    
                        </li>
                    </ul>
                </div>
            </section>
        </div>
        <aside @touchStart="touchStart"
               @touchmove="touchMove"
               @touchEnd="touchEnd">
            <span v-for="(item, index) in letters" :key="index">{{item}}</span>    
        </aside>
       
    </div>
</template>

<script>
    import {mapState, mapActions} from 'vuex';
    export default {
        computed: {
            ...mapState({
                letters: state=>state.index.letters,
                brand: state=>state.index.brand
            })
        },
        methods: {
            ...mapActions({
                initState: 'index/initState'
            }),
            touchStart(){

            },
            touchMove(e){
                console.log(e.touches);
                // 获取手指的位置
                let pageY = e.touches[0].pageY;
                // 计算当前在拿一个字母
                let index = Math.floor((pageY-this.marginTop)/this.height);
                // 字母边界处理
                if (index < 0){
                    index = 0;
                }else if(index > this.letters.length-1){
                    index = this.letters.length - 1;
                }
                console.log('letter...', this.letters[index]);
                
                // 查询id为当前字母的元素
                let ele = document.getElementById(this.letters[index]);
                let top = ele.offsetTop;
                // 当该元素距离顶部的高度赋给滚动元素的scorllTop实现滚动
                document.querySelector('.wrap').scrollTop = top;
            },
            touchEnd(){

            }
        },
        mounted() {
            this.initState();
        },
        updated() {
            // 获取每个字母的高度
            this.height = 0.4*window.innerWidth/750*100;
            // 获取字母列表距离顶部的高度
            this.marginTop = (window.innerHeight - (this.letters.length)*this.height)/2;
        },
    }
</script>
<style scoped lang="scss">
    .index{
        height: 100%;
    }
    .wrap{
        height: 100%;
        overflow: scroll;
    }
    aside{
        position: fixed;
        top: 50%;
        right: .1rem;
        transform: translateY(-50%);
        display: flex;
        flex-direction: column;
        align-items: center;
        span{
            font-size: .24rem;
            color: #666;
            font-weight: 500;
            padding: .02rem .1rem;
            height: 0.4rem;
            box-sizing: border-box;
        }
    }
    ul{
        p{
            font-size: .28rem;
            line-height: .4rem;
            background: #f4f4f4;
            padding-left: .3rem;
            color: #aaa;
        }
        li{
            margin: 0 .3rem;
            height: 1rem;
            box-sizing: border-box;
            border-bottom: 1px solid #ddd;
            display: flex;
            align-items: center;
        }
        img{
            height: .8rem;
        }
        span{
            font-size: .32rem;
            margin-left: .4rem;
        }
    }
</style>
