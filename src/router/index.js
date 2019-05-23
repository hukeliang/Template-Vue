import Vue from 'vue'
import Router from 'vue-router'
import { routerMode } from '../config'
import store from '../store/index'
import Home from '@/views/Home'
import Login from '@/views/Login'
import Account from '@/views/Account'

Vue.use(Router)

const router = new Router({
  mode: routerMode,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/account',
      name: 'Account',
      component: Account,
      meta: {
        requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
      }
    }
  ]
})
// 判断该路由是否需要登录权限
router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    // 通过vuex state获取当前的token是否存在
    if (store.state.token) {
      next()
    } else {
      next({
        path: '/login',
        query: { redirect: to.fullPath } // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }
  } else {
    next()
  }
})

export default router
