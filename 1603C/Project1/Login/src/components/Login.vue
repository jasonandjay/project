<template>
    <div>
        <!-- <img src="/assets/IMG_0230.PNG"> -->
        <div>
            <h3>{{title()}}</h3>
            <input type="text" placeholder="请输入用户名" v-model="username">
            <input type="password" placeholder="请输入密码" v-model="password">
            <button @click="login">登陆</button>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: "app",
        data() {
            return {
                username: '',
                password: ''
            };
        },
        computed: {
            // title: ()=>{
            //     return '登陆页面';
            // }
        },
        watch: {
            username: (val) => {
                console.log('username...', val);
            }
        },
        methods: {
            title() {
                return '登陆页面'
            },
            login() {
                if (!/\w{6,8}/.test(this.username)) {
                    alert('请输入正确的用户名');
                    return;
                }
                if (!/\w{6,8}/.test(this.password)) {
                    alert('请输入正确的密码');
                    return;
                }

                fetch('/login', {
                        headers: {
                            'Content-Type': 'application/json; charset=utf-8'
                        },
                        method: 'POST',
                        body: JSON.stringify({
                            username: this.username,
                            password: this.password
                        })
                    }).then(res => res.json())
                    .then(body => {
                        console.log('body...', body);
                    })
            }
        },
        mounted() {
            console.log('路由参数...', this.$route);
            // charles做请求拦截
            // fetch('/index/index').then(res => res.json())
            //     .then(body => {
            //         console.log('body...', body);
            // })
            // 虚拟域名伪造请求
            // fetch('https://apiv2.manhua.weibo.com/wapwbcomic/home/page_recommend_list?mca=mini_recommend_male')
            // .then(res=>res.json())
            // .then(body=>{
            //     console.log('body...', body);
            // })
            // proxy代理
            // axios({
            //     baseURL: '/api',
            //     method: 'post',
            //     url: 'wapwbcomic/home/page_recommend_list?mca=mini_recommend_male'
            // }).then(res => {
            //     console.log('res...', res);
            // })
            // 使用fetch
            fetch('/api/wapwbcomic/home/?mca=mini_page_recommend_listrecommend_male')
                .then(res => res.json()).then(body => {
                    console.log('fetch...', body);
                })

            // 读取本地存储，实现自动填充功能
            let loginInfo = window.localStorage.getItem('login.loginInfo');
            if (loginInfo){
                loginInfo = JSON.parse(loginInfo);
                this.username = loginInfo.username;
                this.password = loginInfo.password;
            }
        },
        beforeDestroy() {
            let obj = {
                username: this.username,
                password: this.password
            }
            window.localStorage.setItem('login.loginInfo', JSON.stringify(obj));
        }
    };
</script>

<style>
    #app {
        font-family: "Avenir", Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
    h1,
    h2 {
        font-weight: normal;
    }
    ul {
        list-style-type: none;
        padding: 0;
    }
    li {
        display: inline-block;
        margin: 0 10px;
    }
    a {
        color: #42b983;
    }
    img {
        width: 30%;
    }
</style>
