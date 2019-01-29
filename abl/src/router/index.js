import Vue from 'vue'
import Router from 'vue-router'
import lazyLoading from './lazyLoading'
import utils from '@/utils'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/test',
      name: 'test',
      meta: {
        title: '测试'
      },
      component: lazyLoading('page/demo/test')
    },
    {
      path: '/loveconvenience',
      name: 'loveconvenience',
      meta: {
        title: '爱便利-详情'
      },
      component: lazyLoading('page/loveconvenience')
    },
    {
      path: '/loverule',
      name: 'loverule',
      meta: {
        title: '活动规则'
      },
      component: lazyLoading('page/loverule')
    },
    {
      path: '/regist',
      name: 'regist',
      meta: {
        title: '爱便利注册'
      },
      component: lazyLoading('page/demo/regist')
    },
    {
      path: '/login',
      name: 'login',
      meta: {
        title: '爱便利登录'
      },
      component: lazyLoading('page/demo/login')
    },
    {
      path: '/record',
      name: 'record',
      meta: {
        title: '兑换记录',
        auth: true
      },
      component: lazyLoading('page/record')
    },
    {
      path: '/loveover',
      name: 'loveover',
      meta: {
        title: '活动结束',
        cTitle: '' // 用于 c-title 组件
      },
      component: lazyLoading('page/loveover')
    },
    {
      path: '/findmodular',
      name: 'findmodular',
      meta: {
        title: '发现',
        auth: true
      },
      component: lazyLoading('page/findmodular')
    },
    {
      path: '*',
      redirect: '/loveconvenience'
    }
  ],
  mode: 'history',
  base: '/convenient/'
})

let isNotEnd

let isTimeOfActivity = async function (to, from, next) {
  let result = await global.__ce._.api('abl.isTimeOfActivity')
  if (result.result === 'SUCCESS') {
    isNotEnd = true
    if (to.name === 'loveover') {
      next({ name: 'loveconvenience' })
    } else {
      next()
    }
  } else {
    if (result.code === '1006348') {
      next({ name: 'loveover', params: { title: '活动已结束' } })
    } else if (result.code === '1006349') {
      next({ name: 'loveover', params: { title: '活动未开始' } })
    } else {
      console.info('"abl.isTimeOfActivity"接口报错:' + result.msg)
    }
  }
}

let isLogin = function () {
  let coId = utils.getCookie('h5jsessionId')
  if (coId && coId !== 'undefined') {
    return true
  } else {
    return false
  }
}

let shop
router.beforeEach((to, from, next) => {
  if (!shop) {
    let coki = utils.getCookie('shop')
    if (
      !coki ||
      coki === 'undefined' ||
      (to.query && to.query.shop && to.query.shop !== coki)
    ) {
      shop = to.query && to.query.shop
      utils.setCookie('shop', shop)
    }
  }
  // if (process.env.NODE_ENV === 'development') {
  //   next()
  //   return
  // }
  if (to.name === 'findmodular') {
    next()
  } else if (isNotEnd || (to.name === 'loveover' && to.params.title)) {
    if (to.matched.some(record => record.meta.auth)) {
      // this route requires auth, check if logged in
      // if not, redirect to login page.
      if (!isLogin()) {
        next({
          name: 'login',
          params: { redirect: to.fullPath }
        })
      } else {
        next()
      }
    } else {
      next() // 确保一定要调用 next()
    }
  } else {
    isTimeOfActivity(to, from, next)
  }
})

export default router
