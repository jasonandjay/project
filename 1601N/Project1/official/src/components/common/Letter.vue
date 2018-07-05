<template>
    <div class="letter">
        <span v-for="(item, index) in letter" :key="index">{{item}}</span>
    </div>
</template>
<script>
export default {
    props:{
        letter: {
            type: Array
        }
    }
}
</script>
<style lang="sass" scoped>
@import '../../scss/_letter.scss';
</style>
