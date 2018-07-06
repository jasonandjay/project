<template>
    <div ref="master" :class='"master "+masterCls'
        @touchmove.stop="touchMove"
        @touchstart.stop="touchStart"
        @touchend="touchEnd">
        <div v-for="(item, index) in masterList" :key="index">
            <p class="name">{{item.GroupName}}</p>
            <ul>
                <li v-for="(value, key) in item.GroupList" :key="key" @click="click(value.SerialID)">
                    <img :data-src="value.Picture">
                    <div>
                        <p>{{value.AliasName}}</p>
                        <p>{{value.DealerPrice}}</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>    
</template>

<script>
export default {
    props: {
        masterList: {
            type: Array
        },
        masterCls: {
            type: String
        },
        hideMaster: {
            type: Function
        }
    },
    methods: {
        touchStart(e){
            console.log('e...', e);
            this.startTouch = e.touches[0];
        },
        touchMove(e){
            let touch = e.touches[0];
            let pageX = touch.pageX - this.startTouch.pageX;
            this.pageX = pageX;
            if (pageX<0){

            }else{
                this.$refs.master.style = `transform:translate3d(${pageX}px,0,0)`;
            }   
        },
        touchEnd(e){
            this.$refs.master.style = ``;
            if (this.pageX<100){
                // 不作处理
            }else{
                this.hideMaster();
            }
        },
        click(id){
            this.$router.push({
                path: '/detail?id='+id
            })
        }
    }
}
</script>

<style lang="sass" scoped>
@import '../../scss/_masterList.scss';
</style>

