import Vue from 'vue'
Vue.config.productionTip = false

import App from './App.vue'

/* eslint-disable no-new */
new Vue({
  el: '#header',
  render(h) {
    return h(App)
  },
})
