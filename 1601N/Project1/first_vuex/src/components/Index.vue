<template>
    <div>
        <h1>{{time}}</h1>
        <button @click="update">更新时间</button>
    </div>
    
</template>

<script>
export default {
    computed: {
        time(){
            return this.$store.state.index2.time
        }
    },
    methods: {
        update(){
            // this.$store.commit('update', {
            //     time: new Date().toString()
            // })

            // this.$store.commit({
            //     type: 'update',
            //     time: new Date().toString()
            // })

            this.$store.dispatch({
                type: 'update',
                time: new Date().toString()
            })
        }
    }
}
</script>
