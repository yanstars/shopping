import Vue from 'vue' // ES6 模块引入
import App from './App.vue'
import store from './store'
import router from './router'
import ElementUI from 'element-ui';
import axious from 'axios';
import jquery  from 'jquery'

import 'element-ui/lib/theme-chalk/index.css';

//设置后端请求地址以及装在

axious.defaults.baseURL='http://localhost:3000'
// 装载
Vue.prototype.$http = axious
Vue.prototype.$ = jquery
Vue.filter('currency', function (value) {
  return 0.01*value.toFixed(2)+'.00';
});
Vue.config.productionTip = false
Vue.use(ElementUI);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
