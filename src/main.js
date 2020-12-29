// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
//đây là phần router
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
//can thiệp vào trước khi chuyển hướng 
router.beforeEach((to,fro,next)=>{
 console.log('global');
 next();
})
//Vuex
// import {store} from '@/store/data'

new Vue({
  el: '#app',
  router,
  // store,
  template: '<App/>',
  components: { App }
})
