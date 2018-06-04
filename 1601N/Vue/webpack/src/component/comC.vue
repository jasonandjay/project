<template>
    <div>
        <p>我是组件C</P>
        <A :callback="callback"/>
        <br/>
    </div>
</template>

<script>
    import A from './comA.vue';

    export default {
        data: function(){
            return {
                // callback: function(res){
                //     console.log('C组件的输出...', res);
                // }
            }
        },
        props: {
            callback: ''
        },
        components: {
            A
        }
    }
</script>