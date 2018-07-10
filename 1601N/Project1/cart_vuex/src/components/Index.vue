<template>
    <div>
        <List></List>
        <div>
            <input type="checkbox" :checked="isSelectAll" @click="selectAll">全选
            <p>价格: {{price}}</p>    
        </div>   
    </div>    
</template>

<script>
import List from './List';
import {mapState, mapActions} from 'vuex'
export default {
    computed: {
        ...mapState({
            price: state=>state.index.price,
            isSelectAll: state=>state.index.isSelectAll
        })
    },
    methods: {
        ...mapActions({
            selectAll: 'selectAll'
        })
    },
    components: {
        List
    },
    mounted(){
        this.$store.dispatch('getProductList');
    }
}
</script>

<style lang="sass" scoped>

</style>

