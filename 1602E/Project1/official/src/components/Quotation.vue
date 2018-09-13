<template>
    <div>
        <p>询价页面</p>
        <button @click="showCity(true)">当前选择：{{currentCity?currentCity:city.name+city.id}}</button>
        <CitySelect :class="isShowCity?'active': ''"></CitySelect>
        <div>
            <input type="text" placeholder="请输入你的手机号" ref="phone">
            <button @click="click" :class="isSendSMS?'disable':''">{{isSendSMS?timer:'获取短信验证码'}}</button>
        </div>
    </div>
</template>

<script>
    import CitySelect from './common/citySelect.vue';
    import {mapState, mapMutations, mapActions} from 'vuex';
    export default{
        computed: {
            ...mapState({
                isShowCity: state=>state.quotation.isShowCity,
                currentCity: state=>state.quotation.currentCity,
                city: state=>state.quotation.city,
                isSendSMS: state=>state.quotation.isSendSMS,
                timer: state=>state.quotation.timer
            })
        },
        methods: {
            ...mapMutations({
                showCity: 'quotation/showCity'
            }),
            ...mapActions({
                getCapture: 'quotation/getCapture'
            }),
            click(){
                // console.log(isSendSMS);
                if (this.isSendSMS){
                    return;
                }
                let phone = this.$refs.phone.value;
                if (!/^1[3,4,5,7,8,9]\d{9}$/.test(phone)){
                    alert('请输入正确的手机号码');
                    return;
                }
                console.log('获取手机号：', phone);
                this.getCapture(phone);
            }
        },
        components: {
            CitySelect
        }
    }
</script>
<style lang="scss" scoped>
    button.disable{
        background: #666;
    }
</style>
