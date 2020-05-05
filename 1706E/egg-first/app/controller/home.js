'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }

  detail(){
    this.ctx.body = '<p style="color:red">我是详情数据</p>'
  }

  async list(){
    let arr = await this.ctx.service.home.list();
    
    let body = [`<li><span>学号</span><span>姓名</span></li>`].concat(arr.map(item=>{
      return `<li>
        <span>${item.student_id}</span>
        <span>${item.student_name}</span>
      </li>`
    })).join('')
    this.ctx.body = `<ol>${body}</ol>`;
  }
}

module.exports = HomeController;
