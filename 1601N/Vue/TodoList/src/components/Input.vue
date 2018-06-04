<template>
    <div>
        <input type="text" placeholder="todo..." v-model="text">
        <button @click="saveData">保存</button>
    </div>
</template>
<script>
    import {mapState} from 'vuex';
    export default {
        data(){
            return {
                text: ''
            }
        },
        // computed: mapState({
        //     todoText: state=>state.input.text
        // }),
        watch: {
            text(){
                console.log('text changeed');
                this.$store.commit('changeText', this.text);
            }
        },
        methods: {
            saveData(){
                // console.log('text...', this.text);
                // 用commit命令触发mutation
                this.$store.commit('saveData', this.text);
            }
        },
        mounted(){
            console.log(this.$store);
        }
    }
</script>
