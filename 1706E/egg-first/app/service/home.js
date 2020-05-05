const Service = require('egg').Service;

class UserService extends Service {
  async list(){
    try{
      let res = await this.app.mysql.query('select * from student')
      return res;
    }catch(e){
      return []
    }
  }
}

module.exports = UserService;