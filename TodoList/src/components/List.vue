<template>
    <div>
        {{this.$store.state.list.msg}}
        {{msg}}
    </div>
</template>
<script>
    import {mapState} from 'vuex';
    export default {
        computed: mapState({
            msg: state => state.list.msg
        }),
        mounted(){
            // console.log('store...', this.$store.state.list);
            // setTimeout(()=>{
            //     this.$store.commit('changeMsg');
            // }, 1000)
        }
    }
</script>
