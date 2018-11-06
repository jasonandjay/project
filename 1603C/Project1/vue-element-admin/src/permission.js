import router from './router'
import store from './store'
import { Message } from 'element-ui'
import NProgress from 'nprogress' // 进度条插件：start|done
import 'nprogress/nprogress.css'// 进度条的样式
import { getToken } from '@/utils/auth' // 从cookie中获取Token

NProgress.configure({ showSpinner: false })// 进度条配置配置，不需要显示小圈圈

// 权限判断辅助方法
function hasPermission(roles, permissionRoles) {
  if (roles.indexOf('admin') >= 0) return true // 如果有admin权限，直接跳转
  if (!permissionRoles) return true // 如果没配置权限，当前路由不需要做权限判断
  return roles.some(role => permissionRoles.indexOf(role) >= 0) // 把用户权限和路由权限做匹配，判断用户能不能去当前路由
}

const whiteList = ['/login', '/auth-redirect']// 不需要token就可以进入的页面白名单

router.beforeEach((to, from, next) => {
  NProgress.start() // 进度条开始渲染
  if (getToken()) { // 判断是否有token
    /* 如果有token */
    if (to.path === '/login') {
      next({ path: '/' })
      NProgress.done() // 如果在当前页重定向到当前页，hack方法把进度条消失
    } else {
      if (store.getters.roles.length === 0) { // 判断当前用户是否已拉取完user_info信息
        store.dispatch('GetUserInfo').then(res => { // 拉取user_info
          console.log('res...', res);
          const roles = res.data.roles // 注意：权限必须是一个数组,eg: ['admin','editor']
          store.dispatch('GenerateRoutes', { roles }).then(() => { // 根据roles权限生成可访问的路由表
            router.addRoutes(store.getters.addRouters) // 动态添加可访问路由表
            next({ ...to, replace: true }) // hack方法 确保addRoutes已完成 ,set the replace: true so the navigation will not leave a history record
          })
        }).catch((err) => {
          store.dispatch('FedLogOut').then(() => {
            Message.error(err || 'Verification failed, please login again')
            next({ path: '/' })
          })
        })
      } else {
        // 没有动态改变权限的需求可直接next() 删除下方权限判断 ↓
        if (hasPermission(store.getters.roles, to.meta.roles)) {
          next()
        } else {
          next({ path: '/401', replace: true, query: { noGoBack: true }})
        }
        // 可删 ↑
      }
    }
  } else {
    /* 没有token */
    if (whiteList.indexOf(to.path) !== -1) { // 在免登录白名单，直接进入
      next()
    } else {
      next(`/login?redirect=${to.path}`) // 否则全部重定向到登录页
      NProgress.done() // 如果在当前页重定向到当前页，hack方法把进度条消失
    }
  }
})

router.afterEach(() => {
  NProgress.done() // 关闭进度条
})
