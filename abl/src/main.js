// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import './filter'
import router from './router'
// import 'element-ui/lib/theme-chalk/index.css'
// import ElementUi from 'element-ui'
import '@/resource/environment'
import '@/resource'
import cHead from '@/components/cHead'
// 弹窗组件
import toastRegistry from '@/toast/index'
Vue.use(toastRegistry)
// Vue.use(ElementUi)

Vue.config.productionTip = false
window.Promise = Promise
// // 引入mockjs
// process.env.NODE_ENV == 'development' && require('./mock/mock.js')

Vue.use(require('vue-wechat-title')) // 实例化参数
Vue.component('c-head', cHead)
// px2rem
// window.onresize = setHtmlFontSize
// function setHtmlFontSize () {
//   const htmlWidth =
//     document.documentElement.clientWidth || document.body.clientWidth
//   const htmlDom = document.getElementsByTagName('html')[0]
//   htmlDom.style.fontSize = htmlWidth / 10 + 'px'
// }
// setHtmlFontSize()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
