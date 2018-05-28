<template>
    <div>
        <ul>
            <li v-for="(item, index) in nav" :key="index" @click="navClick(item.id)"
            :class="item.id==curId?'active':null">
                {{item.name}}
            </li>
        </ul>
    </div>
</template>

<style scoped lang="scss">
    li{
        width: 2.5rem;
        font-size: .32rem;
        line-height: .6rem;
        border-bottom: 1px solid #c0c0c0;
    }
    li.active{
        background: lightgreen;
    }
</style>

<script>
    export default{
        data: ()=>{
            return {
                // 当前被选中的id
                curId: ''  
            }
        },
        props: {
            nav: {
                type: Array,
                default: []
            },
            navChange: {
                type: Function,
                default: ''
            }
        },
        methods: {
            navClick(id){
                this.curId = id;
                this.navChange(id);
            }
        },
        mounted(){
            setTimeout(()=>{
                console.log('nav...', this.nav);
            }, 1000);
        }
    }
</script>

