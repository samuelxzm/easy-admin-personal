import Vue from 'vue'
import App from './App.vue'
import store from './store/index'
import Ea from 'easy-admin-framework'
import 'easy-admin-framework/lib/veasyadmin.css'
import elementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import { Object } from 'core-js'

Vue.config.productionTip = false
Vue.use(elementUI)
Vue.use(Ea)
// document.title = 'whatever you want'

// requires and returns all modules that match
const requireAll = requireContext => requireContext.keys().map(requireContext);
// import all svg
const req = require.context('./assets/icons/svg', true, /\.svg$/);
requireAll(req);

let routerList = require('./router.json')
global.menu = routerList.routerList
let Routerdata = JSON.parse(JSON.stringify(routerList))

function setLayer(obj) {
    return obj.map(e => {
        let a = e
        let path = a.component
        a.component = () =>
            import(`./views/${path}`)
        if ('children' in e) {
            a.children = setLayer(e.children)
        }
        return a
    })
}
setLayer(Routerdata.routerList)
let router = Ea.RouterSet(Routerdata)
console.log(router)
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')