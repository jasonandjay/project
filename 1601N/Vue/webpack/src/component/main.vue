<template>
    <div>
        <h1>我是父组件</h1>
        <Login :object="object1"/>
        <br/>
        <LoginInfo :isLogin="isLogin"/>
    </div>
</template>

<style lang="">
    
</style>

<script>
    // 父组件main，包含两个子组件login和loginInfo
    import Login from './login.vue';
    import LoginInfo from './loginInfo.vue';
    export default {
        data: function(){
            return {
                object1: {
                    loginCallback: (res)=>{
                        console.log('登陆返回值...', res)
                        this.isLogin = !!res.data.code
                    }
                },
                isLogin: false
            }
        },
        components: {
            Login,
            LoginInfo
        }
    }
</script>