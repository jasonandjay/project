<template>
    <div>
        <p>询价页面</p>
        <button @click="showCity(true)">当前选择：{{currentCity?currentCity:city.name+city.id}}</button>
        <CitySelect :class="isShowCity?'active': ''"></CitySelect>
        <div>
            <input type="text" placeholder="请输入你的手机号" ref="phone">
            <button @click="getCapture">获取短信验证码</button>
        </div>
    </div>
</template>

<script>
    import CitySelect from './common/citySelect.vue';
    import {mapState, mapMutations} from 'vuex';
    export default{
        computed: {
            ...mapState({
                isShowCity: state=>state.quotation.isShowCity,
                currentCity: state=>state.quotation.currentCity,
                city: state=>state.quotation.city
            })
        },
        methods: {
            ...mapMutations({
                showCity: 'quotation/showCity'
            }),
            getCapture(){
                let phone = this.$refs.phone.value;
                if (!/^1[3,4,5,7,8,9]\d{9}$/.test(phone)){
                    alert('请输入正确的手机号码');
                    return;
                }
                console.log('获取手机号：', phone);
            }
        },
        components: {
            CitySelect
        }
    }
</script>
