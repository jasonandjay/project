<template>
    <h2>我是产品页面</h2>
</template>

<script>
    import Dispatch from '../../dispatch.js';
    export default {
        data: function(){
            return {}
        },
        mounted(){
            Dispatch.on(this, 'sendData', (res)=>{
                console.log('收到的数据...', res)
            })
        }
    }
</script>