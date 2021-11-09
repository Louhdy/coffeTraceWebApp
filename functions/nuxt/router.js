import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _a28540f2 = () => interopDefault(import('..\\pages\\inspire.vue' /* webpackChunkName: "pages/inspire" */))
const _2b13c6c7 = () => interopDefault(import('..\\pages\\recepciones\\index.vue' /* webpackChunkName: "pages/recepciones/index" */))
const _e70559de = () => interopDefault(import('..\\pages\\recepciones\\nueva-recepcion.vue' /* webpackChunkName: "pages/recepciones/nueva-recepcion" */))
const _38561d3e = () => interopDefault(import('..\\pages\\recepciones\\detalle\\_id.vue' /* webpackChunkName: "pages/recepciones/detalle/_id" */))
const _5525ca82 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/inspire",
    component: _a28540f2,
    name: "inspire"
  }, {
    path: "/recepciones",
    component: _2b13c6c7,
    name: "recepciones"
  }, {
    path: "/recepciones/nueva-recepcion",
    component: _e70559de,
    name: "recepciones-nueva-recepcion"
  }, {
    path: "/recepciones/detalle/:id?",
    component: _38561d3e,
    name: "recepciones-detalle-id"
  }, {
    path: "/",
    component: _5525ca82,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
