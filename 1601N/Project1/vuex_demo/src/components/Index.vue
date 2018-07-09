<template>
    <div>
        <h2>{{msg}}</h2>
        <button @click="update">更新时间</button>
    </div>
</template>

<script>
export default {
    computed: {
        msg(){
            return this.$store.state.index.msg
        }
    },
    methods: {
        update(){
            this.$store.dispatch({
                type: 'update',
                timestamp: new Date().toString()
            })
        }
    }
}
</script>

