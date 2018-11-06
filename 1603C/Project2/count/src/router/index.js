import React from 'react';
import dynamic from 'dva/dynamic';


// 引入一级路由
// import Series from '../routes/SeriesPage';
// 引入二级路由
// import Recommend from '../routes/series/Recommend';

const Series = dynamic({
  // models: () => [
  //   import('./models/users'),
  // ],
  component: () => import('../routes/SeriesPage'),
});

// 声明无状态组件
const StateLess = props=>{
  // console.log('props...', props);
  return <h1>{props.match.path}</h1>
}

export default app=>{
  return  {
    routes: [{
      path: '/animation',
      component: StateLess
    }, {
      path: '/series',
      component: Series,
      children: [{
        path: '/series/recommend',
        component: dynamic({
          app,
          models: () => [
            import('../models/series'),
          ],
          component: () => import('../routes/series/Recommend'),
        })
      }]
    },{
      path: '/music',
      component: StateLess
    },{
      path: '/dance',
      component: StateLess
    },{
      path: '/',
      redirect: '/series/recommend'
    }]
  }
}
