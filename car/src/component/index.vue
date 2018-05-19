<template>
    <div>
        <!-- 筛选功能区 -->
        <div>
            <span>排序</span>
            <span @click="clickBrand">品牌</span>
            <span @click="clickPrice">价格{{priceSort?'降序':'升序'}}</span>
            <span>筛选</span>
        </div>
       
       <div>
            <!-- 品牌列表 -->
            <Brand v-if="showBrand" :brand="brand" :brandClickCb="brandClickCb"/>   
            <!-- 车型列表 -->
            <div v-else>
                <li v-for="(item,index) in brandList" :key="index">
                    <p>{{item.carName}}</p>
                    <p>{{item.price}}</p>
                </li>
            </div>
       </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import Brand from './brand.vue';
    export default {
        data: function(){
            return {
                data: [],   //车型总数据
                brand: [],  // 品牌列表
                curBrand: '', //当前选择品牌
                brandList: [], //品牌下车型列表
                showBrand: false,    //是否显示品牌
                priceSort: 0,   //0表示升序，1表示降序
                brandClickCb: res=>{
                    this.curBrand = res;
                    this.showBrand = false;
                    this.data.forEach(item=>{
                        item.forEach(value=>{
                            console.log('value...', value);
                            if (this.curBrand == value.carClass){
                                this.brandList = value.carList;
                            }
                        })
                    })
                }
            }
        },
        components: {
            Brand,
        },
        methods: {
            getData: function(){
                axios.get('/getData').
                then(res=>{
                    res = res.data;
                    let brand = [];
                    res.forEach((item)=> {
                        item.forEach((value)=>{
                            brand.push(value.carClass);
                        })
                    });
                    this.data = res;
                    this.brand = brand;
                    this.brandList = res[0][0].carList;
                    this.brandList.sort((pre,next)=>{
                        let prePrice = pre.price.split('-')[0],
                            nextPrice = next.price.split('-')[0];
                        return prePrice - nextPrice
                    })
                    console.log('brand..',this.brand, '/nbrandList...', this.branList);
                })
            },
            clickBrand: function(){
                this.showBrand = !this.showBrand;
            },
            clickPrice: function(){
                this.priceSort = !this.priceSort;
                if (this.priceSort){
                    this.brandList.sort((pre,next)=>{
                        let prePrice = pre.price.split('-')[0],
                            nextPrice = next.price.split('-')[0];
                        return prePrice - nextPrice
                    })
                }else{
                    this.brandList.sort((pre,next)=>{
                        let prePrice = pre.price.split('-')[0],
                            nextPrice = next.price.split('-')[0];
                        console.log(nextPrice, prePrice)
                        return  nextPrice - prePrice
                    })
                }
            }
        },
        mounted: function(){
            this.getData();
        }
    }
</script>