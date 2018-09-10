<template>
    <div>
        <input type="text" placeholder="请输入你的用户名" ref="username">
        <input type="password" placeholder="请输入你的密码" ref="password">
        <button @click="login">登陆</button>
    </div>
</template>

<script>
    export default {
        methods: {
            login(){
                let username = this.$refs.username.value,
                    password = this.$refs.password.value;
                if (username == '1602E' && password == '1602E'){
                    window.localStorage.setItem('login', 'true');
                    window.history.back();
                }
            }
        }
    }
</script>
