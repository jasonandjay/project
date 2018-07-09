<template>
    <div>
        <h1>{{time}}</h1>
        <button @click="update">更新时间</button>
        <input type="text" placeholder="请输入你的姓名" v-model="input">
    </div>
    
</template>

<script>
export default {
    computed: {
        time(){
            return this.$store.state.index2.time
        },
        // input(){
        //     return this.$store.state.index2.input
        // },
        input: {
            get(){
                return this.$store.state.index2.input
            },
            set(value){
                this.$store.commit('changeInput', {
                    input: value
                })
            }
        }
    },
    methods: {
        changeInput(e){
            this.$store.commit('changeInput', {
                input: e.target.value
            })
        },
        update(){
            // 利用第一个参数指定type
            // this.$store.commit('update', {
            //     time: new Date().toString()
            // })

            // 利用type属性指定参数
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
