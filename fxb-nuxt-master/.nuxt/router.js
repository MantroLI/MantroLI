import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _24cb35fa = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages_about" */))
const _0016e3b4 = () => interopDefault(import('..\\pages\\find\\index.vue' /* webpackChunkName: "pages_find_index" */))
const _0e2ab3d6 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages_login" */))
const _5904d163 = () => interopDefault(import('..\\pages\\userCenter.vue' /* webpackChunkName: "pages_userCenter" */))
const _786e5486 = () => interopDefault(import('..\\pages\\bid\\investlist.vue' /* webpackChunkName: "pages_bid_investlist" */))
const _3f8ee45a = () => interopDefault(import('..\\pages\\bid\\productlist.vue' /* webpackChunkName: "pages_bid_productlist" */))
const _a7b0dfd6 = () => interopDefault(import('..\\pages\\bid\\transfer.vue' /* webpackChunkName: "pages_bid_transfer" */))
const _448310bf = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

Vue.use(Router)

if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}

export function createRouter() {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,

    routes: [{
      path: "/about",
      component: _24cb35fa,
      name: "about"
    }, {
      path: "/find",
      component: _0016e3b4,
      name: "find"
    }, {
      path: "/login",
      component: _0e2ab3d6,
      name: "login"
    }, {
      path: "/userCenter",
      component: _5904d163,
      name: "userCenter"
    }, {
      path: "/bid/investlist",
      component: _786e5486,
      name: "bid-investlist"
    }, {
      path: "/bid/productlist",
      component: _3f8ee45a,
      name: "bid-productlist"
    }, {
      path: "/bid/transfer",
      component: _a7b0dfd6,
      name: "bid-transfer"
    }, {
      path: "/",
      component: _448310bf,
      name: "index"
    }],

    fallback: false
  })
}
