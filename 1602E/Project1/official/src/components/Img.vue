<template>
    <div class="img" @scroll="scroll" ref="scroll">
        <div ref="element">
            <img v-for="(item, index) in list" :src="item.Url.replace('{0}', item.LowSize)" :key="index">
        </div>
    </div>
</template>

<script>
    import {mapState, mapActions} from 'vuex';
    export default{
        computed:{
            ...mapState({
                list: state=>state.img.list
            })
        },
        methods: {
            ...mapActions({
                getImgDetailList: 'img/getImgDetailList'
            }),
            scroll(){
                let scrollEle = this.$refs.scroll.scrollTop;
                let elementHeight = this.$refs.element.getBoundingClientRect().height;
                if (scrollEle + window.innerHeight + 20 > elementHeight){
                    this.getImgDetailList();
                }
            }
        },
        mounted(){
            // 获取数据列表
            this.getImgDetailList();
        }
    }
</script>
<style lang="scss" scoped>
    .img{
        height: 100%;
        overflow: scroll;
    }
</style>
