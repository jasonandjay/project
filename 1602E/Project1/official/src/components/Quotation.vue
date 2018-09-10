<template>
    <div>
        <p>询价页面</p>
        <button @click="showCity(true)">当前选择：{{currentCity}}</button>
        <CitySelect :class="isShowCity?'active': ''"></CitySelect>
    </div>
</template>

<script>
    import CitySelect from './common/citySelect.vue';
    import {mapState, mapMutations} from 'vuex';
    export default{
        computed: {
            ...mapState({
                isShowCity: state=>state.quotation.isShowCity,
                currentCity: state=>state.quotation.currentCity
            })
        },
        methods: {
            ...mapMutations({
                showCity: 'quotation/showCity'
            })
        },
        components: {
            CitySelect
        }
    }
</script>
