<template>
    <div>
        <p>我是组件D</P>
        <C :callback="callback"/>
        <br/>
    </div>
</template>

<script>
    import C from './comC.vue';

    export default {
        data: function(){
            return {
                // callback: function(res){
                //     console.log('D组件的输出...', res);
                // }
            }
        },
        props: {
            callback: null
        },
        components: {
            C
        }
    }
</script>