'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }

  // 引入数据库的配置
  mysql: {
    enable: true,
    package: 'egg-mysql'
  }
};