<template>
    <div>
        <p v-for="(item,index) in brand" :key="index" @click="brandClickCb(item)">
            {{item}}
        </p>
    </div>
</template>

<script>
    export default {
        data: function(){
            return {}
        },
        props: {
            brand:'',
            brandClickCb: ''
        }
    }
</script>