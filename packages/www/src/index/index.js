import Vue from 'vue'
Vue.config.productionTip = false

// // 基础样式
// import './css/base.css'

// // /* 基础组件 */
// import Layout from './components/Layout.vue'
// import Notice from './components/Notice/NoticeFront.vue'
// import LuckyDraw from './components/LuckyDraw.vue'
// import ButtonList from './components/ButtonList.vue'
// import RecommenderList from './components/RecommenderList.vue'

// const components = [Layout, LuckyDraw, ButtonList, RecommenderList, Notice]

// components.forEach((component) => {
//   Vue.component(component.name, component)
// })

// // TODO Something

// /* 全局 奖品通知  */
// import Message from './components/Message'
// Vue.prototype.$message = Message
// Vue.prototype.$showPrize = Message.showPrize
// Vue.prototype.$showError = Message.showError
// Vue.prototype.$initDialog = Message.initDialog

// import Common from './common/'
// Vue.prototype.$handleClick = Common.handleClick
// Vue.prototype.$log = Common.log

import App from './App.vue'
// import router from './router'
import store from './store'

/* eslint-disable no-new */
new Vue({
  el: '#body',
  store,
  // router,
  render(h) {
    return h(App)
  },
})
