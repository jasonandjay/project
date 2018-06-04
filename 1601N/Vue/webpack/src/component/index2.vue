<template>
    <div>
        <h1>首页</h1>
        <Login :parent="123"/>
        <Login :parent="data">
            <h2>登陆页面
                <h3>我是h3</h3>
                <h4>用户名{{username}} 密码{{password}}</h4>
            </h2>
            <template slot="head">
                <p>我是头部</p>
            </template>
        </Login>
    </div>
</template>

<style lang="">
    
</style>

<script>
    import Login from './login.vue';
    export default {
        data: function(){
            return {
                username: 'username',
                password: 'password',
                data: {
                    name: '',
                    age: '',
                    title: '登陆',
                    callback: function(res){
                        console.log('登陆的返回值...', res);
                    }
                }
            }
        },
        components: {
            Login
        }
    }
</script>