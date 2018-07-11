<template>
    <div>
        <input type="text" placeholder="todo..." ref="input">
        <button @click="save">保存</button>
    </div>
</template>


<script>
import {mapMutations} from 'vuex';
export default {
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
