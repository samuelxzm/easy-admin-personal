import Vue from 'vue'
import Router from 'vue-router'
import Layout from 'easy-admin-x/src/components/Layout'
Vue.use(Router)

export const constantRoutes = [

  {
    path: '/dashboard',
    component:Layout,
    meta:{
      type:'inner'
    },
    children: [
      {
        path: 'index',
        name: '首页',
        component: () => import('@/views/dashboard/index.vue'),
        meta:{
          serviceName:'ts-table',
          icon:'code'
        }
      }
    ]
  },
  {
    path: '/help',
    name: '帮助',
    component:Layout,
    meta:{
      serviceName:'ts-table',
      icon:'code'
    },
    children: [
      {
        path: 'index',
        name: '帮助',
        component: () => import('@/views/help/help.vue'),
        meta:{
          serviceName:'ts-table',
          icon:'code'
        }
      },
      {
        path: 'about',
        name: '关于',
        component: () => import('@/views/help/about.vue'),
        meta:{
          serviceName:'ts-table',
          icon:'code'
        }
      }
    ]
  }
]
const createRouter = () => new Router({
  mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})
global.antRouter=constantRoutes
const router = createRouter()
// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
// export function resetRouter() {
//   const newRouter = createRouter()
//   router.matcher = newRouter.matcher // reset router
// }

export default router
