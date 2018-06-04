<template>
    <div>
        <p>
            <img/>
            <span>北京市</span>
        </p>
        <div class="list">
            <ul>
                <Product v-for="(item, index) in carts" :key="index" :item="item" :index="index"
                :subCount="subCount" :addCount="addCount" :selectItem="selectItem"/>
                <!-- <li v-for="(item, index) in carts" :key="index"> 
                    <input type="checkbox" v-model="item.checked" @change="selectItem(item)">
                    <img :src="item.image">
                    <div>
                        <p>{{item.name}}</p>
                        <p>{{item.product_tags && item.product_tags[0].name}}</p>
                        <div>
                            <p>${{item.vip_price_pro && ((item.vip_price_pro.price_up.price)/100).toFixed(2)}}</p>
                            <div>
                                <i @click="subCount(index)">-</i>
                                <span>{{item.count}}</span>
                                <i @click="addCount(index)">+</i>
                            </div>
                        </div>
                    </div>
                </li> -->
            </ul>
        </div>
        <div class="price">
            <input type="checkbox" v-model="isSelectAll" @change="selectAll">
            <span>全选</span>
            <div>
                <p>价格<span>${{price}}</span></p>
                <p>包邮</p>
            </div>
            <button>去结算></button>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    @import '../scss/_shopping.scss';
    ul{
        overflow: hidden;
    }
</style>
<script>
    import Product from './common/Product.vue';
    export default {
        data(){
            return {
                // 购物车数据
                carts: [],
                // 总价  
                price: 0,
                // 是否全选
                isSelectAll: false,
            }
        },
        components: {
            Product
        },
        methods: {
            changeCart(){
                let price = 0;
                this.carts.forEach((item)=>{
                    // 根据是否选中状态判断是否需要计算价格
                    if (item.checked){
                        let itemPrice = item.vip_price_pro?(((item.vip_price_pro.price_up.price)/100).toFixed(2)):0;
                        price += item.count*itemPrice;
                    }
                })
                this.price = price.toFixed(2);
            },
            selectItem(){
                let isSelectAll = true;
                this.carts.forEach((item)=>{
                    // 判断是否全部选中
                    if (!item.checked){
                        isSelectAll = false;
                    }
                })
                this.isSelectAll = isSelectAll;
                this.changeCart();
            },
            selectAll(){
                 this.carts.forEach((item)=>{
                     item.checked = this.isSelectAll;
                });
                this.changeCart();
            },
            subCount(index){
                if (this.carts[index].count == 1){
                    console.log('你确定删除该商品么?');
                    var con = confirm('你确定删除该商品么?');
                    if (con){
                        // 删除
                        this.carts.splice(index, 1);
                        window.localStorage.setItem('missfresh.carts', JSON.stringify(this.carts));
                    }else{
                        // 取消，就啥也不干
                    }
                }else{
                    this.carts[index].count -= 1;
                }
                this.$forceUpdate();
                this.changeCart();
            },
            addCount(index){
                this.carts[index].count += 1;
                this.$forceUpdate();
                this.changeCart();
            }
        },
        mounted(){
            let storage = window.localStorage.getItem('missfresh.carts');
            if (storage){
                storage = JSON.parse(storage);
                this.carts = storage;
                this.carts.forEach((item)=>{
                    item.checked = false;
                })
                console.log('this.carts...', this.carts);
            }
        }
    }
</script>