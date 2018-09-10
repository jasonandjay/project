<template>
    <div>
        <p>详情页</p>
        <li class="year">
            <span @click="changeYear(item)" v-for="(item, index) in years" :key="index" :class="currentYear==item?'active':''">{{item}}</span>
        </li>
        <section>
             <ul v-for="(item, index) in list" :key="index">
                <p>{{index}}</p>
                <li v-for="(value, key) in item" :key="key">
                    <p>{{value.market_attribute.year+'款 '+value.car_name}}</p>
                    <p>{{`${value.max_power}马力${value.gear_num}档${value.trans_type}`}}</p>
                    <p>
                        <span>{{`指导价${value.market_attribute.dealer_price_min}`}}</span>
                        <span>{{value.market_attribute.official_refer_price}}</span>
                    </p>
                </li>
            </ul>
        </section>
    </div>
</template>

<script>
    import {mapState, mapGetters, mapMutations, mapActions} from 'vuex';
    export default {
        computed: {
            ...mapState({
                currentYear: state=>state.detail.currentYear
            }),
            ...mapGetters({
                years: 'detail/years',
                list: 'detail/list'
            })
        },
        methods: {
            ...mapActions({
                getDetailList: 'detail/getDetailList'
            }),
            ...mapMutations({
                changeYear: 'detail/changeYear'
            })
        },
        mounted(){
            this.getDetailList(this.$route.query.id);
             console.log(2);
            // console.log(this.$route)
        },
        updated(){
            console.log('years...', this.years, this.currentYear);
        },
        beforeRouteEnter (to, from, next) {
            // ...
            next();
            console.log(1);
        },
        beforeRouteLeave (to, from, next) {
            // ...
            console.log(3);
            next();
        },
        beforeDestroy() {
            console.log(4);
        },
    }
</script>

<style lang="scss" scoped>
    li{
        list-style: none;
        span{
            padding-right: .46rem;
        }
    }
    .year{
        border-top: .15rem solid #f4f4f4;
        padding: 0 .3rem;
        font-size: .32rem;
        height: .77rem;
        line-height: .77rem;
        background: #fff;
    }
    .year .active{
        color: #3aacff;
    }
    ul>p{
        padding: 0 .2rem;
        height: .5rem;
        line-height: .5rem;
        font-size: .26rem;
        color: #999;
        background: #f4f4f4;
    }
    ul>li{
        padding: 0 .2rem;
        border-bottom: .18rem solid #f4f4f4;
        overflow: hidden;
        p:nth-child(1){
            padding: .26rem 0 .18rem;
            font-size: .3rem;
            line-height: 1;
            color: #3d3d3d;
        }
        p:nth-child(2){
            color: #bdbdbd;
            font-size: .26rem;
        }
        p:nth-child(3){
            text-align: right;
            padding-bottom: .1rem;
            font-size: .24rem;
            color: #818181;
            span:nth-child(2){
                font-size: .3rem;
                color: #ff2336;
                margin-left: .1rem
            }
        }
    }
    ul>li:last-child{
       border-bottom: 0;
    }
</style>

