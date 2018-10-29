/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/views/layout/Layout'

const wz1603CRouter =  {
  path: '/1603C',
  component: Layout,
  children: [
    {
      path: 'index',
      component: () => import('@/views/1603c/index'),
      name: '1603C',
      meta: { title: 'wz1603c', icon: 'peoples', noCache: true }
    }
  ]
}

export default wz1603CRouter
