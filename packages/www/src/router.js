import Vue from 'vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Index from './views/Index.vue'

const routes = [
  {
    path: '/',
    component: Index,
  },
  {
    path: '/activity/:id',
    name: 'activity',
    component: () => import('./views/Activity.vue'),
    meta: {
      keepAlive: true,
    },
  },
  {
    path: '/404',
    name: 'error',
    component: () => import('./views/Error.vue'),
    meta: {
      keepAlive: true,
    },
  },
]

const _importViews = function (files, path) {
  files.keys().forEach((key) => {
    var item = key.replace(/\/index\.vue/g, '').substr(2)
    routes.push({
      path: '/' + item + '/:id',
      name: item,
      component: () => import(path + item + '/index.vue'),
      meta: {
        keepAlive: true,
      },
    })
  })
}

_importViews(require.context('./homes', true, /\/index\.vue/), './homes/')
_importViews(require.context('./pages', true, /\/index\.vue/), './pages/')

routes.push({
  path: '*',
  redirect: '/404',
})

const router = new VueRouter({
  routes,
})

export default router
