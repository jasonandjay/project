<template>
    <div>
        <input type="text" placeholder="todo..." v-model="text" ref="input">
        <button @click="save">保存</button>
    </div>
</template>


<script>
import {mapMutations} from 'vuex';
export default {
    computed: {
        text: {
            get(){
                return this.$store.state.list.text;
            },
            set(val){
                this.$store.commit('changeText', val);
            }
        }
    },
    methods: {
        ...mapMutations({
            addList: 'addList' 
        }),
        save(){
            let input = this.$refs.input.value;
            console.log('input...', input);
            this.addList(input);
        }
    }
}
</script>
