<template>
    <el-row align="middle">
        <el-col :span="16"  :offset="4">
            <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
                <el-form-item label="用户名" prop="name">
                    <el-input v-model="ruleForm2.name" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="password">
                    <el-input type="password" v-model="ruleForm2.password" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm2')">登陆</el-button>
                </el-form-item>
            </el-form>
        </el-col>
    </el-row>
</template>

<script>
import { hex_md5 } from "../utils/md5.js";
import axios from "axios";
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (!value) {
        callback(new Error("请输入用户名"));
      } else {
        if (this.ruleForm2.password !== "") {
          this.$refs.ruleForm2.validateField("password");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (!value) {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };
    return {
      ruleForm2: {
        name: "",
        password: ""
      },
      rules2: {
        name: [{ validator: validatePass, trigger: "blur" }],
        password: [{ validator: validatePass2, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      console.log(this.ruleForm2);
      console.log("", hex_md5, hex_md5("123"));
      this.$refs[formName].validate(valid => {
        if (valid) {
          let data = {};
          data.username = this.ruleForm2.name;
          data.password = hex_md5(this.ruleForm2.password);

          console.log("data..", data);
          axios.post("http://169.254.239.219:9000/login", data).then(res => {
            console.log("res...", res);
            if (res.data.code == 0) {
              // 登陆成功，设置sessionStorage
              window.sessionStorage.setItem('isLogin', 'true');
              window.sessionStorage.setItem('loginTime', +new Date()+'');
              // 登陆成功，获取权限列表
              axios.get("http://169.254.239.219:9000/accessList?uid=" + res.data.id)
                .then(res => {
                  console.log("res...", res);
                  if (res.data.code == 0) {
                    let accessList = res.data.list.map(item => {
                      return item.accessname;
                    });
                    if (accessList.length == 0) {
                      this.$alert("你当前没有任何权限!");
                    } else {
                      window.sessionStorage.setItem(
                        "accessList",
                        JSON.stringify(accessList)
                      );
                      this.$router.push("/content");
                    }
                  } else {
                    this.$alert(res.data.msg);
                  }
                });
            } else {
              this.$alert(res.data.msg);
            }
          });
          // fetch('http://127.0.0.1:9000/login', {
          //     method: 'POST',
          //     body: JSON.stringify(data),
          //     // headers: new Headers({
          //     //     'Content-Type': 'application/json'
          //     // })
          // })
          // .then(res=>{
           //     return res.json();
          // })
          // .then(body=>{
          //     console.log('body');
          // })
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
