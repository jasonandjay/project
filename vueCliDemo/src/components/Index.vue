<template>
    <div>
        <h1>我是首页</h1>
        <News/>
        <Product/>
    </div>
</template>

<script>
    import News from './index/news.vue';
    import Product from './index/product.vue';
    export default {
        data: function(){
            return {}
        },
        components: {
            News,
            Product
        },
        mounted(){
        
        }
    }
</script>