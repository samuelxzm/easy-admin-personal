import router from '@/router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import axios from 'axios'
const _import = require('../router/_import_' + process.env.NODE_ENV)//获取组件的方法
console.log(process.env.NODE_ENV)
import Layout from '@/components/Layout'
import settings from '@/settings'
let getRouter

if(settings.useAjaxRouter){
  router.beforeEach((to, from, next) => {
    NProgress.start()
    if (!getRouter) {
      if (!getObjArr('router')) {
        axios.get('/api/ts-table/menus/select/all').then(res => {
         let dd=[]
          res.forEach(e=>{
            e.meta={serviceName:e.serviceName}
            if(!e.idParent){
              e.children=[]
              dd.push(e)
            }
            res.forEach(ch=>{
              if(ch.idParent==e.id){
              e.children.push(ch)
              }
            })
          })
          getRouter = dd//后台拿到路由
          saveObjArr('router', getRouter) //存储路由到localStorage
          routerGo(to, next)//执行路由跳转方法
          NProgress.done()
        })
      }
      else {
        getRouter = getObjArr('router')//拿到路由
        routerGo(to, next)
        NProgress.done()
      }
    }
    else {
      next()
      NProgress.done()
    }
  })
}
else{
  router.beforeEach((to, from, next) => {
    NProgress.start()
      next()
      NProgress.done()
  })
}

function saveObjArr(name, data) { //localStorage 存储数组对象的方法
  console.log(data)
  localStorage.setItem(name, JSON.stringify(data))
}

function getObjArr(name) { //localStorage 获取数组对象的方法
  return JSON.parse(window.localStorage.getItem(name));

}
function routerGo(to, next) {
  getRouter = filterAsyncRouter(getRouter) //过滤路由
  router.addRoutes(getRouter) //动态添加路由
  router.options.routes = router.options.routes.concat(getRouter)
  global.antRouter = getRouter //将路由数据传递给全局变量，做侧边栏菜单渲染工作
  console.log(global.antRouter)
  next({ ...to, replace: true })
}
function filterAsyncRouter(asyncRouterMap) { //遍历后台传来的路由字符串，转换为组件对象

  const accessedRouters = asyncRouterMap.filter(route => {
  
    if (route.component) {
      if (route.component === 'Layout') {//Layout组件特殊处理
        route.component = Layout
      } else { 
        route.component = _import(route.component)
      }
    }
    if (route.children && route.children.length) {
      route.children = filterAsyncRouter(route.children)
    }
    return true
  })
  return accessedRouters
}