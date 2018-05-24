<template>
    <div>
         <h3>选择收获地址</h3>
        <div class="search">
            <span>{{city}}</span>
            <input type="text" placeholder="请输入要收获的小区/写字楼">
        </div>
        <p>因各地区商品和配送服务不同，请您选择准确收货地址</p>
        <div class="location">
            <span @click="goBack">{{ipCity}}</span>
            <span>当前位置</span>
            <span @click="refreshLocation">刷新</span>
        </div>
    </div>
</template>
<style scoped lang='scss'>
    @import '../../scss/_city.scss';
</style>
<script>
    import axios from 'axios';
    export default {
        data(){
            return {
                city: '北京市',
                ipCity: '',
                cityList: []
            }
        },
        methods: {
            refreshLocation(e){
                console.log('e...', e)
                let ele = document.querySelector('#location'); 
                ele && ele.remove();
                const script = document.createElement('script');
                script.src = 'http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=js';
                script.id = 'location';
                script.onload = ()=>{
                    console.log('remote_ip_info', remote_ip_info);
                    // 更新定位信息
                    this.ipCity = remote_ip_info.province;
                }
                document.body.appendChild(script);
            },
            goBack(){
                this.$router.back();
            }
        },
        mounted(){
            // console.log('remote_ip_info', remote_ip_info);
            // 默认当前选择的城市是定位的城市
            this.city = this.ipCity = remote_ip_info.province;
        },
        // 路由进入
        beforeRouteEnter: (to, from, next) => {
            // ...
            console.log('beforeRouteEnter...');
            next();
        },
        // 路由离开
        beforeRouteLeave: (to, from, next) => {
            // ...
            console.log('beforeRouteLeave...');
            next();
        },
        beforeDestroy(){
            console.log('beforeDestory...');
            // 储存选择的城市
            window.localStorage.setItem('missfresh.city', this.city);
        }
    }
</script>

