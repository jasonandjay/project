<template>
    <div class="index">
        <div id="list" class="wrap">
            <section>
                <div v-for="(item, index) in brand" :key="index">
                    <ul>
                        <p :id="index">{{index}}</p>
                        <li v-for="(value, key) in item" :key="key" @click="getMakeList(value.MasterID)">
                            <img :data-src="value.CoverPhoto" src="../assets/black.jpg">
                            <span>{{value.Name}}</span>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
        <section v-show="isShow" class="letter">
            <span>{{letter}}</span>
        </section>
        <aside @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd">
            <span v-for="(item, index) in letters" :key="index">{{item}}</span>
        </aside>
        <MakeList></MakeList>
    </div>
</template>

<script>
    import {
        mapState,
        mapActions,
        mapMutations
    } from 'vuex';
    import MakeList from './common/makeList';
    import lazyLoad from '../util/lazyLoad.js';
    import '../util/util.js';
    export default {
        computed: {
            ...mapState({
                letters: state => state.index.letters,
                brand: state => state.index.brand,
                letter: state=>state.index.letter,
                isShow: state=>state.index.isShow
            })
        },
        components: {
            MakeList,
        },
        methods: {
            ...mapActions({
                initState: 'index/initState',
                getMakeList: 'index/getMakeList'
            }),
            ...mapMutations({
                showLetter: 'index/showLetter',
                changeLetter: 'index/changeLetter'
            }),
            touchStart(e) {
                this.showLetter(true);
                let letter = e.target.innerHTML;
                console.log('letter...', letter, e.target,);
                 if (this.letter != letter){
                    // 改变当前字母
                    this.changeLetter(letter);
                 }
            },
            touchMove(e) {
                console.log(e.touches);
                // 获取手指的位置
                let pageY = e.touches[0].pageY;
                // 计算当前在拿一个字母
                let index = Math.floor((pageY - this.marginTop) / this.height);
                // 字母边界处理
                if (index < 0) {
                    index = 0;
                } else if (index > this.letters.length - 1) {
                    index = this.letters.length - 1;
                }
                console.log('letter...', this.letters[index]);
                if (this.letter != this.letters[index]){
                     // 查询id为当前字母的元素
                    let ele = document.getElementById(this.letters[index]);
                    let top = ele.offsetTop;
                    // 当该元素距离顶部的高度赋给滚动元素的scorllTop实现滚动
                    document.querySelector('.wrap').scrollTop = top;
                    // 改变当前字母
                    this.changeLetter(this.letters[index]);
                }
            },
            touchEnd() {
                this.showLetter(false);
            },
            updateLazy: function(){
                var store = [], offset, throttle, poll;
                var _inView = function (el) {
                    var coords = el.getBoundingClientRect();
                    return ((coords.top >= 0 && coords.left >= 0 && coords.top) <= (window.innerHeight || document.documentElement.clientHeight) + parseInt(offset));
                };
                var _isDeal = function(el){
                    return el.getAttribute('src') === el.getAttribute('data-src');
                };
                var _pollImages = function () {
                    for (var i = store.length; i--;) {
                        var self = store[i];
                        if (!_isDeal(self) && _inView(self)) {
                            self.src = self.getAttribute('data-src');
                            store.splice(i, 1);
                        }
                    }
                };
                var _throttle = function () {
                    console.log(123);
                    clearTimeout(poll);
                    poll = setTimeout(_pollImages, throttle);
                };
                (function (obj={}) {
                    var nodes = document.querySelectorAll('[data-src]');
                    var opts = obj || {};
                    offset = opts.offset || 0;
                    throttle = opts.throttle || 250;

                    for (var i = 0; i < nodes.length; i++) {
                        store.push(nodes[i]);
                    }
                    _throttle();

                     let ele1 = document.getElementById('list');
                    // ele1.addEventListener('scroll', _throttle, false);
                    // document.body.addEventListener('scroll', _throttle, false);
                })();
            },
        },
        mounted() {
            this.initState();
        },
        updated() {
            // 获取每个字母的高度
            this.height = 0.4 * window.innerWidth / 750 * 100;
            // 获取字母列表距离顶部的高度
            this.marginTop = (window.innerHeight - (this.letters.length) * this.height) / 2;
            // if (Object.entries(this.brand).length){
                // this.updateLazy();
            // }
            lazyLoad('.wrap');
        },
    }
</script>
<style scoped lang="scss">
    .index {
        height: 100%;
    }
    .wrap {
        height: 100%;
        overflow: scroll;
    }
    aside {
        position: fixed;
        top: 50%;
        right: .1rem;
        transform: translateY(-50%);
        display: flex;
        flex-direction: column;
        align-items: center;
        span {
            font-size: .24rem;
            color: #666;
            font-weight: 500;
            padding: .02rem .1rem;
            height: 0.4rem;
            box-sizing: border-box;
        }
    }
    ul {
        p {
            font-size: .28rem;
            line-height: .4rem;
            background: #f4f4f4;
            padding-left: .3rem;
            color: #aaa;
        }
        li {
            margin: 0 .3rem;
            height: 1rem;
            box-sizing: border-box;
            border-bottom: 1px solid #ddd;
            display: flex;
            align-items: center;
        }
        img {
            height: .8rem;
            width: .8rem;
        }
        span {
            font-size: .32rem;
            margin-left: .4rem;
        }
    }
    .letter{
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate3d(-50%, -50%, 0);
        width: 2rem;
        height: 2rem;
        background: rgba(0,0,0,1);
        border-radius: .1rem;
        font-size: 1rem;
        color: #fff;
        text-align: center;
        line-height: 2rem;
    }
</style>
