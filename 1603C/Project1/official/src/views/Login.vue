<template>
    <el-form status-icon ref="ruleForm2" label-width="70px" class="demo-ruleForm">
        <el-form-item label="用户名">
            <el-input type="text" v-model="username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码">
            <el-input type="password" v-model="password" autocomplete="off"></el-input>
        </el-form-item>
         <el-form-item label="手机号">
            <el-input type="number" v-model="phone" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="验证码">
            <el-input type="number" v-model="code" autocomplete="off"></el-input>
            <el-button type="primary" @click="getSMSCode" :disabled="sending">{{sending?`${time}S`:'发送短信验证码'}}</el-button>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm()">提交</el-button>
            <el-button @click="resetForm()">重置</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
    var md5 = require('md5');
    import {setToken} from '@/utils/index.js';
    export default {
        data(){
            return {
                username: '',
                password: '',
                phone: '',
                code: '',
                trl: '',
                sending: false,
                time: 60
            }
        },
        methods: {
            submitForm(){
                if (!/[\u4e00-\u9fa5|\w]{2,12}/.test(this.username)){
                    this.$alert('请输入正确的用户名');
                    return;
                }
                if (!/\w{3,8}/.test(this.password)){
                    this.$alert('请输入正确的密码');
                    return;
                }
                if(!(/^1[34578]\d{9}$/.test(this.phone))){
                    this.$alert("手机号码有误，请重填");
                    return;
                }
                 if(!(/^\d{6}$/.test(this.code))){
                    this.$alert("验证码有误，请重填");
                    return;
                }
                // window.localStorage.setItem('login', 'true');
                // this.$router.push('/');
                fetch('http://169.254.78.172:10001/login', {
                    method: 'POST',
                    body: JSON.stringify({
                        username: this.username,
                        password: md5(this.password+"hello world"),
                        phone: this.phone,
                        code: this.code
                    }),
                    headers: {
                      'content-type': 'application/json'
                    },
                }).then(res=>res.json())
                .then(body=>{
                    console.log('body...', body);
                    // 设置token
                    setToken(body.data.token);
                    this.$alert(body.msg);
                })
            },
            resetForm(){
                this.username = '';
                this.password = '';
            },
            getSMSCode(){
                if (this.sending){
                    return;
                }
                if(!(/^1[34578]\d{9}$/.test(this.phone))){
                    this.$alert("手机号码有误，请重填");
                    return;
                }
                fetch('http://169.254.78.172:10001/sendSMS', {
                    method: 'POST',
                    body: JSON.stringify({
                        phone: this.phone
                    }),
                    headers: {
                      'content-type': 'application/json'
                    },
                }).then(res=>res.json())
                .then(body=>{
                    if (body.code == 1){
                        console.log('body...', body);
                        this.sending = true;
                        let inter = setInterval(()=>{
                            this.time--;
                            if (this.time == 0){
                                clearInterval(inter);
                                this.sending = false;
                                this.time = 60;
                            }
                        }, 1000);
                    }else{
                        this.$alert(body.msg);
                    }
                })
            }
        },
        beforeRouteEnter (to, from, next) {
            // ...
            console.log('router enter...');
            next();
        },
        beforeRouteLeave (to, from, next) {
            // ...
            console.log('router leave...');
            next();
        },
        mounted(){
            console.log('mounted...');
        },
        beforeDestroy(){
            console.log('before destory...');
        },
        destroyed(){
            console.log('destoryed...');
        }
    }
</script>

<style lang="scss" scoped>
.demo-ruleForm{
    width: 80%;
    margin: 200px auto;
}
</style>
