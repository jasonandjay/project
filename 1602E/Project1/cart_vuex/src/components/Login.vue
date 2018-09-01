<template>
    <div>
        <input type="text" placeholder="请输入你的用户名" ref="username">
        <input type="password" placeholder="请输入你的密码" ref="password">
        <button @click="login">登陆</button>
    </div>
</template>

<script>
    export default {
        methods:{
            login(){
                let username = this.$refs.username.value,
                    password = this.$refs.password.value;

                if (!username){
                    alert('请输入用户名');
                    return;
                }
                if (!password){
                    alert('请输入密码');
                    return;
                }

                this.$store.commit('login/doLogin', {
                    username,
                    password
                })
            }
        }
    }
</script>
