<template>
    <div>
        <button @click="changeNum('+')">+</button>
        <span>{{num}}</span>
        <button @click="changeNum('-')">-</button>
    </div>
</template>

<script>
    export default {
        name: 'app',
        computed: {
            num() {
                return this.$store.state.app.num
            }
        },
        methods: {
            changeNum(type) {
                if (type == '+') {
                    // this.$store.commit('changeNum', this.num+1)
                    this.$store.dispatch('changeNumAsync', this.num+1)
                }else{
                    this.$store.commit('changeNum', this.num-1)
                }
            }
        },
        mounted() {
            console.log('store...', this.$store, this.$store.getters.doubleNum);
        }
    }
</script>
