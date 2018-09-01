<template>
    <div>
        <p>我是购物车组件</p>
        <li v-for="(item, index) in list" :key="index">
            <input type="checkbox" :checked="item.isSelect" @change="changeSelect(index)">
            <span>{{item.name}}</span>
            <span>￥{{item.price}}</span>
            <div>
                <button @click="changeNum({index, type:'+'})">+</button>
                <span>{{item.num}}</span>
                <button  @click="changeNum({index, type:'-'})">-</button>
            </div>
        </li>    
        <section>
            价格：{{totalPrice(this.list)}}
            数量：{{totalNum(this.list)}}
        </section>
    </div>
</template>

<script>
    import {mapState, mapActions, mapMutations} from 'vuex';
    export default{
        computed: {
            ...mapState({
                list:state=>state.cart.list
            })
        },
        methods: {
            ...mapActions({
                initData: 'cart/initData'
            }),
            ...mapMutations({
                changeSelect: 'cart/changeSelect',
                changeNum: 'cart/changeNum'
            }),
            totalPrice: (list)=>{
                let price = 0;
                list.forEach(item=>{
                    if (item.isSelect){
                        price += item.price*item.num;
                    }
                })
                return price;
            },
            totalNum: (list)=>{
                let num = 0;
                list.forEach(item=>{
                    if (item.isSelect){
                        num += item.num;
                    }
                })
                return num;
            }
        },
        mounted() {
            this.initData(123); 
            // this.$store.dispatch('cart/initData', 456);
        }
    }
</script>