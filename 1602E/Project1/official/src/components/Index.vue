<template>
    <div>
        <section>
            <div v-for="(item, index) in brand" :key="index">
                <ul>
                    <p>{{index}}</p>
                    <li v-for="(value, key) in item" :key="key">
                        <img :src="value.CoverPhoto">
                        <span>{{value.Name}}</span>    
                    </li>
                </ul>
            </div>
        </section>
        <aside>
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
            })
        },
        mounted() {
            this.initState();
        },
    }
</script>
<style scoped lang="scss">
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
