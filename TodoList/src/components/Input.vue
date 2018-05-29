<template>
    <div>
        {{msg2}}
    </div>
</template>
<script>
    export default {
         mounted(){
            console.log('store...', this.$store.state.list);
            setTimeout(()=>{
                this.$store.commit('changeMsg');
            }, 1000)
        }
    }
</script>
