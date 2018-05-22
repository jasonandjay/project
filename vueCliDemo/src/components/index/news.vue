<template>
    <div>
        <h2>我是新闻</h2>
        <button @click="btnClick">给产品区发送一条数据</button>
    </div>
</template>

<script>
    import Dispatch from '../../dispatch.js';
    export default {
        data: function(){
            return {}
        },
        methods: {
            btnClick(){
                Dispatch.emit('sendData', {
                    msg: '来自新闻组件的一条数据'
                })
            }
        },
        mounted(){
        
        }
    }
</script>