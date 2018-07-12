<template>
    <div>
        <div class="img">
            <p class="tit">
                <span>颜色</span>
                <span>车款</span>
            </p>
            <div class="img-list">
                <ul v-for="(item, index) in list" :key="index">
                    <li v-for="(value, key) in item.List" :key="key">
                        <span :style="{'backgroundImage': `url(${value.Url.replace('{0}', value.LowSize)})`}"></span>
                        <p v-if="!key" @click="clickAll(item.Id)">
                            <span>{{item.Name}}</span>
                            <span>{{item.Count}}张></span>
                        </p>
                    </li>
                </ul>
            </div>
        </div>
        <div v-if="showDetail" class="img-detail" @scroll="scrollAll">
            <ul ref="ul">
                <li v-for="(value, key) in categoryList" :key="key">
                    <span :style="{'backgroundImage': `url(${value.Url.replace('{0}', value.LowSize)})`}"></span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import {mapState, mapMutations, mapActions} from 'vuex';
export default {
    computed: {
        ...mapState({
            list: state=>state.img.list,
            categoryList: state=>state.img.categoryList,
            showDetail: state=>state.img.showDetail
        })
    },
    methods: {
        ...mapActions({
            getImgList: 'getImgList',
            getCategoryImageList: 'getCategoryImageList'
        }),
        ...mapMutations({
            showAll: 'showAll'
        }),
        clickAll(id){
            this.showAll(id);
            this.getCategoryImageList();
        },
        scrollAll(e){
            if (this.fetchingAll){
                return;
            }
            let scrollHeight = this.$refs.ul.getBoundingClientRect().height - window.innerHeight;
            let current = e.target.scrollTop;
            console.log('current...', current, scrollHeight);
            if (current > (scrollHeight-20)){
                // 加载下一页数据
                this.fetchingAll = true;
                this.getCategoryImageList({
                    cb: ()=>{
                        this.fetchingAll = false
                    }
                });
            }
        }
    },
    mounted(){
        this.getImgList();
        this.fetchingAll = false;
    }
}
</script>

<style lang="scss" scoped>
    .img{
        height: 100%;
        background: #f4f4f4;
    }
    .tit{
        position: fixed;
        background: #fff;
        top: 0;
        width: 100%;
        height: .8rem;
        -webkit-box-align: center;
        align-items: center;
        box-sizing: border-box;
        // z-index: 99;
    }
    .img-list{
        overflow: hidden;
        position: absolute;
        background: #fff;
        top: .98rem;
        bottom: 0;
        overflow-y: scroll;
        -webkit-overflow-scrolling: touch;
        border-bottom: .4rem solid #f4f4f4;
    }
    ul{
        margin-bottom: .1rem;
        overflow: hidden;
        position: relative;
        p{
            position: absolute;
            top: 0;
            width: 100%;
            height: 100%;
            text-align: center;
            background: rgba(56,90,130,.5);
            span{
                font-size: .28rem;
                margin-top: .8rem;
                color: #fff;
                display: block;
            }
            span:nth-child(2){
                font-size: .26rem;
                margin-top: .2rem;
            }
        }
    }
    li{
        position: relative;
        float: left;
        margin-right: .06rem;
        width: 2.46rem;
        height: 2.46rem;
        padding: 0;
        margin-bottom: .06rem;
        list-style: none;
        &>span{
            width: 100%;
            height: 100%;
            background-size: cover;
            display: inline-block;
        }
    }
    li:nth-child(3n+3){
        margin: 0;
    }
    .img-detail{
        overflow: hidden;
        position: absolute;
        background: #fff;
        top: 0;
        bottom: 0;
        width: 100%;
        overflow-y: scroll;
        -webkit-overflow-scrolling: touch;
        ul{
            border-bottom: .4rem solid #f4f4f4;
            margin: 0
        }
    }
</style>
