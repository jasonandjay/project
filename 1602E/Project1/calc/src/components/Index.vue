<template>
    <div>
        <button @click="add">+</button>
        <span>{{computedNum}}</span>
        <button @click="sub">-</button>    

        <input type="text" v-model="name">
        <slot>
            <p>0000000</p>
        </slot>
    </div>
</template>

<script>
export default {
    data: ()=>{
        return {
            num: 0,
            name: ''
        }
    },
    // 存放组件的方法
    methods: {
        add(){
            this.num++;
        },
        sub(){
            this.num--;
        }
    },
    // 计算属性,读的时候用
    computed: {
        // 函数的名字就是计算属性
        computedNum(){
            return this.num*3
        }
    },
    // 监听属性，写的时候触发
    watch: {
        num(val){
            console.log('要设置的值...', val);
        },
        name(val){
            console.log('输入的值...', val);
        }
    },
    props: {
        // props的名字
        count: {
            // 类型检查
            type: Number,
            // 默认值
            default: 10
        }
    }    
};
</script>

<style>
</style>
