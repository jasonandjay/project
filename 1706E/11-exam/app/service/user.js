
const Service = require('egg').Service;

class UserService extends Service {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
  // 查找当前用户名的用户
  async find(username) {
    let res = await this.app.mysql.query('select * from user where username=?', [username]);
    return res;
  }

  // 插入到用户表中
  async insert(username, password, authority) {
    let res = await this.app.mysql.query('insert into user (username, password, authority) values(?, ?, ?)', [username, password, authority])
    console.log('res...', res);
    return res.affectedRows
  }

  // 用户登陆
  async login(username, password){
    let res = await this.app.mysql.query('select * from user where username=? and password=?', [username, password]);
    return res;
  }
}

module.exports = UserService;