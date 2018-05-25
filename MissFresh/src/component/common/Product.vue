<template>
    <li> 
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
    </li>
</template>

<style lang="scss" scoped>
    @import '../../scss/_shopping.scss';
</style>

<script>
    export default {
        data(){
            return {}
        },
        props: {
            item: {
                type: Object,
                default: {}
            },
            index: '',
            subCount: '',
            addCount: '',
            selectItem: ''
        }
    }
</script>