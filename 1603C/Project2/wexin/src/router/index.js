import React from 'react';
import dynamic from 'dva/dynamic';

// 引入一级路由
import Login from '../routes/LoginPage';
import Index from '../routes/IndexPage';

// const Series = dynamic({
      // app: app,
//   // models: () => [
//   //   import('./models/users'),
//   // ],
//   component: () => import('../routes/SeriesPage'),
// });
// const wrapDynamic = (component, app, model)=>{
//   if (model){
//     return dynamic({
//       app,
//       models: ()=>[import(model)],
//       component: ()=>import(component)
//     })
//   }else{
//     return dynamic({
//       component: ()=>import(component)
//     })
//   }
// }

export default app=>{
  return  {
    routes: [{
      path: '/login',
      component: Login
    }, {
      path: '/',
      component: Index
    }]
  }
}
