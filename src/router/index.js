import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
/**
 * 自动化注册所有子路由
 */
const baseRoute = [
  {
    path: '/',
    redirect: '/teacher'
  }
]
const childRoutes = []
const requireModules = require.context('@/pages', true, /\.router.js$/);
requireModules.keys().forEach(fileName => {
  const file = requireModules(fileName);
  childRoutes.push(file.default || file)
})
const routes = baseRoute.concat(childRoutes)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router