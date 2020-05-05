'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);

  // 登陆
  router.post('/login', controller.user.login);
  // 注册
  router.post('/register', controller.user.register);
  // 列表接口
  router.get('/list', controller.user.list);
  // 新增接口
  router.post('/add', controller.user.add);
  // 删除接口
  router.delete('/delete', controller.user.delete);

};
