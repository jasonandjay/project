<template>
    <div class="container">
        <slot></slot>  
        <!-- <h3>{{data.title}}</h3> -->
        <div>
            <label>用户名：</label>
            <input type="text" v-model="username">
        </div>
        <div>
            <label>密码：</label>
            <input type="password" v-model="password">
        </div>
        <div>
            <input id="checkbox" type="checkbox" v-model="isRemeber">
            <label for="checkbox">是否记住账号密码</label>
        </div>
        <!-- <slot name="head"></slot> -->
        <button :class="cls" @click="doLogin">登陆</button>
    </div>
</template>
<style>
    .container{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-around;
        height: 30%;
        margin: 35% 0 0 100px;
    }
    button.active{
        background: lightgreen;
    }
</style>

<script>
    import axios from 'axios';
    export default {
        data: function(){
            return {
                username: '',
                password: '',
                isRemeber: false,
                cls: ''
            }
        },
        props: {
            parent: {
                // type: String
            },
            object: {

            } 
        },
        methods: {
            doLogin: function(){
                // 判断此时按钮是否可点击
                if (!this.cls){
                    return;
                }
                // 判断是否要记住密码
                if (this.isRemeber){
                    window.localStorage.setItem('account', JSON.stringify({
                        username: this.username,
                        password: this.password
                    }))
                }
                console.log('点击了登陆按钮');
                // 去登陆
                axios.get('/login', {
                    params: {
                        username: this.username,
                        password: this.password
                    }
                }).then(res=>{
                    console.log('res...', res);
                    // this.parent.callback(res);
                    // this.parent.callback({
                    //     username: this.username,
                    //     password: this.password,
                    //     isRemeber: this.isRemeber,
                    //     cls: this.cls
                    // })
                    // 对main父组件执行登陆回调
                    this.object.loginCallback(res);
                    // if (res.data.code == 1){
                        // window.location = 'http://www.baidu.com';
                    // }else{
                        // alert(res.data.msg);
                    // }
                }).catch(err=>{
                    console.log('error...', err);
                })
            }
        },
        watch: {
            username: function(){
                if (this.username && this.password){
                    this.cls = 'active'
                }else{
                    this.cls = '';
                }
                this.username = this.username.toUpperCase();
            },
            password: function(){
                 if (this.username && this.password){
                    this.cls = 'active'
                }else{
                    this.cls = '';
                }
            }
        },
        mounted: function(){
            // 刚进入页面，判断本地是否有存储账号密码
            let store = window.localStorage.getItem('account');
            if (store){
                store = JSON.parse(store);
                if (store.username){
                    this.username = store.username;
                    this.password = store.password;
                }
            }

            // 输出父组件传递过来的prop
            setTimeout(()=>{
                console.log('父组件传递过来的数据：', this.parent);
            }, 300);
        }
    }
</script>