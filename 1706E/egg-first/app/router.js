'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);

  router.get('/detail', controller.home.detail);

  router.get('/list', controller.home.list);

  
};
