export default {
  path: '/shop',
  name: 'shop',
  icon: 'shop',
  // component: '../layouts/BasicLayout.js',
  routes: [
      { path: '/shop/', redirect: '/shop/list' },
      { path: '/shop/list', name: 'list', component: './Shop/List',icon:'bars' }
    ],
}
