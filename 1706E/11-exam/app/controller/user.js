'use strict';

const Controller = require('egg').Controller;
const jwt = require('jsonwebtoken');

class UserController extends Controller {
  /**
   * 登陆接口
   * post /login
   */
  async login() {
    try{
        this.ctx.validate({
            username: 'string',
            password: 'string'
        }, this.ctx.request.body)
    }catch(error){
        this.ctx.status = 400;
        this.ctx.body = {msg: error}
        return;
    }

    let {username, password} = this.ctx.request.body;
    password = this.ctx.helper.sha256(password);
    let res = await this.ctx.service.user.login(username, password);
    if (res.length){
      // 登陆成功，使用jwt进行签名
      let {id, ...info} = res[0];
      let token = jwt.sign(info, 'bawei', { expiresIn: 60 * 60 });
      this.ctx.body = {
        code: 0,
        msg: '登陆成功',
        token
      }
    }else{
      this.ctx.body = {
        code: -1,
        msg: '登陆失败'
      }
    }
  }

  /**
   * 注册接口
   * post /register
   */
  async register() {
    try{
      this.ctx.validate({
          username: 'string',
          password: 'string',
          authority: 'string'
      }, this.ctx.request.body)
    }catch(error){
        this.ctx.status = 400;
        this.ctx.body = {msg: error}
        return;
    }
    
    let {username, password, authority} = this.ctx.request.body;
    // 判断用户名是否重复
    let num = await this.ctx.service.user.find(username); 
    if (num.length){
      this.ctx.body = {
        code: -1,
        msg: '用户名已存在'
      }
      return;
    }  
    
    // 把用户信息插入表中
    password = this.ctx.helper.sha256(password);
    console.log('password', password)
    let rows = await this.ctx.service.user.insert(username, password, authority);
    if (rows == 1){
      this.ctx.body = {
        code: 0,
        msg: '注册成功'
      }
    }else{
      this.ctx.body = {
        code: -2,
        msg: '注册失败'
      }
    }
  }

  /**
   * 获取列表
   * get /list
   */
  async list() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }

  /**
   * 新增列表
   * post /add
   */
  async add() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }

  /**
   * 删除用户
   * delete /delete
   */
  async delete() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
}

module.exports = UserController;
