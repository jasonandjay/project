<template>
    <div>
        123
        <router-link to="/login" tag="span">跳转到登陆页面</router-link>
        <router-link :to="{
                path: '/login',
                query: {
                    a:1,
                    b:2
                }
            }" tag="span">跳转到登陆页面</router-link>
        <router-link :to="{
                name: 'Login',
                params: {
                    c:3,
                    d:4
                }
            }" tag="span">跳转到登陆页面</router-link>

        <List :swiper="swiper"/>
    </div>
</template>

<script>
    import List from './common/List';
    export default {
        data(){
            return {
                swiper: []
            }
        },
        mounted(){
            // 使用fetch
            fetch('/api/wapwbcomic/home/?mca=mini_page_recommend_listrecommend_male')
                .then(res => res.json()).then(body => {
                    console.log('fetch...', body);
                    this.swiper = body.data.index_slide;
                })
        },
        components: {
            List
        }
    }
</script>

