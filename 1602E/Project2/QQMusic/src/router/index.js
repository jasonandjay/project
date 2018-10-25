import React from 'react';

// 一级路由
import Tab from '../routes/TabPage';
import Detail from '../routes/Detail';

// 二级路由
import Rank from '../routes/RankPage';
import Search from '../routes/SearchPage'
import Index from '../routes/IndexPage';



export default {
  routes: [{
    path: '/tab',
    component: Tab,
    children: [{
      path: '/tab/index',
      component: Index
    },
    {
      path: '/tab/rank',
      component: Rank
    },
    {
      path: '/tab/search',
      component: Search
    }]
  },
  {
    path: "/detail",
    component: Detail
  }]
}
