<template>

</template>
<script>
import {mapActions} from 'vuex';
export default {
    // 排序规则
    // 排量的升序=>发动机功率升序=>吸气方式（自然吸气>涡轮增压）=>年份降序
    methods: {
        ...mapActions({
            getCarInfo: 'detail/getCarInfo'
        })
    },
    mounted(){
        this.getCarInfo(this.$route.query.serialID);
    }
}
</script>
<style lang="scss" scoped>

</style>
