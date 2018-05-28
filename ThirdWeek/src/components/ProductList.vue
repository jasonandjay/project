<template>
    <div class="list">
        <h2>{{data.name}}</h2>
        <div>
            <ul v-for="(item, index) in data.list" :key="index">
                <h3>{{item.listName}}</h3>
                <li v-for="(val, key) in item.info" :key="key">
                    <img :src="val.img">
                    <span>{{val.productName}}</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss">
    .list{
        flex: 1;
        height: 100%;
        overflow-y: scroll;
        ul{
            border-bottom: 1px solid #c0c0c0;
        }
    }
    h2{
        font-size: .36rem;
    }
    h3{
        font-size: .3rem;
    }
    li{
        display: flex;
        align-items: center;
        margin: .1rem 0;
    }
    img{
        width: 1.8rem;
    }
    span{
        font-size: .24rem;
    }
</style>

<script>
    export default{
        data(){
            return {}
        },
        props: {
            data: {
                type: Object,
                default: {}
            }
        },
        mounted(){
            setTimeout(()=>{
                console.log('data...', this.data);
            }, 1000)
        }
    }
</script>

