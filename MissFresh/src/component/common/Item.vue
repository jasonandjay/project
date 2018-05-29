<template>
    <div>
        <img :src="item.image">
        <h2>{{item.name}}</h2>
        <h3>{{item.subtitle}}</h3>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                item: {}
            }
        },
        mounted(){
            console.log('router...', this.$route);
            this.item = this.$route.params;
        }
    }
</script>