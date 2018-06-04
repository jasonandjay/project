<template>
    <div>
        <p>我是组件A</P>
        <br/>
    </div>
</template>

<script>
    export default {
        data: function(){
            return {
                str: '123456'
            }
        },
        props: {
            callback: ''
        },
        mounted: function(){
            this.callback('我是A组件'+new Date())
        }
    }
</script>