<template>
    <div>
        <p>我是组件B</p>
        <p>接受从A组件传递过来的数据：{{info}}</p>
        <br/>
    </div>
</template>

<script>
    export default {
        data: function(){
            return {}
        },
        props: {
            info: ''
        }
    }
</script>