<template>
    <h1>我是消息页</h1>
</template>

<script>
    export default {
        data: function(){
            return {}
        },
        mounted: function(){
            console.log('router...', this.$router, this.$route, this);
        }
    }
</script>