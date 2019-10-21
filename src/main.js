import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'normalize.css'
import './icons' // icon
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from '@/store'
import EaLayout from 'ea-layout'
// import '@/router/getRouters.js'//这里进行路由后台获取的模拟
// Vue.prototype.$axios = axios;

import axios from './assets/js/common.js' //引入axios
import qs from 'qs'//引入QS包装data数据
import {getRequest,postRequest} from './assets/js/common.js'
// import './assets/css/common.css'

Vue.use(axios)
Vue.use(EaLayout)
Vue.prototype.getRequest = getRequest;
Vue.prototype.postRequest = postRequest;
Vue.prototype.$qs = qs;
Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
