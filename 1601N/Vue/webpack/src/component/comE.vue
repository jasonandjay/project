<template>
    <div>
        <p>我是组件E</P>
        <B :info="info"/>
        <D :callback="callback"/>
        <br/>
    </div>
</template>

<script>
    import B from './comB.vue';
    import D from './comD.vue';

    export default {
        data: function(){
            return {
                callback: (res)=>{
                    this.info = res;
                    console.log('E组件的输出...', res, this, this.str, this.info);
                },
                info: ''
            }
        },
        components: {
            B,
            D
        }
    }
</script>