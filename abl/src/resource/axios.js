// import Vue from 'vue'
import API from './api'
import axios from 'axios'
import merge from 'webpack-merge'
import { Message } from 'element-ui'
import router from '@/router'
// import devConf from '../../config/dev.env'
// import proConf from '../../config/prod.env'
import utils from '@/utils'

class Axios extends API {
  create ({ plugins = [], ...defaultOptions } = {}) {
    let superClass = this
    let instance = axios.create(merge({}, ...plugins))

    instance.defaults.baseURL = process.env.baseURL

    instance.interceptors.request.use(
      config => {
        // 根据请求方法，序列化传来的参数，根据后端需求是否序列化
        if (
          config.method.toLocaleLowerCase() === 'post' ||
          config.method.toLocaleLowerCase() === 'put' ||
          config.method.toLocaleLowerCase() === 'delete'
        ) {
          // 序列化
          config.data.params = JSON.stringify(config.data.params)
          // 温馨提示,若是贵公司的提交能直接接受json 格式,可以不用 qs 来序列化的
        }
        return config
      },
      error => {
        // 请求错误时做些事
        return Promise.reject(error)
      }
    )

    // 响应拦截器
    instance.interceptors.response.use(
      response => {
        if (process.env.mock && process.env.NODE_ENV === 'development') {
          console.log('Mock:', response.data)
        }
        return response
      },
      err => {
        let mess = ''
        if (err && err.response) {
          switch (err.response.status) {
            case 400:
              mess = '错误请求'
              console.log('错误请求')
              break
            case 401:
              mess = '未授权，请重新登录'
              console.log('未授权，请重新登录')
              break
            case 403:
              mess = '拒绝访问'
              console.log('拒绝访问')
              break
            case 404:
              mess = '请求错误,未找到该资源'
              console.log('请求错误,未找到该资源')
              break
            case 405:
              mess = '请求方法未允许'
              console.log('请求方法未允许')
              break
            case 408:
              mess = '请求超时'
              console.log('请求超时')
              break
            case 500:
              mess = '服务器端出错'
              console.log('服务器端出错')
              break
            case 501:
              mess = '网络未实现'
              console.log('网络未实现')
              break
            case 502:
              mess = '网络错误'
              console.log('网络错误')
              break
            case 503:
              mess = '服务不可用'
              console.log('服务不可用')
              break
            case 504:
              mess = '网络超时'
              console.log('网络超时')
              break
            case 505:
              mess = 'http版本不支持该请求'
              console.log('http版本不支持该请求')
              break
            default:
              mess = `连接错误${err.response.status}`
              console.log(`连接错误${err.response.status}`)
          }
        } else {
          mess = '连接到服务器失败'
          console.log('连接到服务器失败')
        }

        if (mess) {
          Message({
            message: mess,
            position: 'top',
            duration: 2000
          })
        }

        return Promise.reject(err)
        // return Promise.reject(error);
      }
    )

    let instanceReq = function (options, resolve, reject) {
      instance
        .request(options)
        .then(function (response) {
          if (response && response.data) {
            if (
              process.env.NODE_ENV !== 'development' &&
              response.data.result === 'FAULT'
            ) {
              if (response.data.code === '1006344') {
                // 判断是否登录
                router.push({
                  name: 'login',
                  params: { redirect: router.history.current.fullPath }
                })
              } else if (response.data.code === '1006345') {
                // 判断活动是否已结束
                router.push({
                  name: 'loveover',
                  params: { redirect: router.history.current.fullPath }
                })
                // } else if (
                //   !response.data ||
                //   (!options.fail && response.data.result === 'FAULT')
                // ) {
                //   Message({
                //     type: 'error',
                //     message: '未知错误'
                //   })
                //   console.info(response.data)
              } else {
                resolve(response.data)
              }
            } else {
              resolve(response.data)
            }
          } else {
            reject(response)
          }
        })
        .catch(function (err) {
          reject(err)
        })
    }

    return function (key, params = {}) {
      let userId = utils.getCookie('h5loginerId')
      if (userId && userId !== 'undefined') {
        params.params = Object.assign(params.params || {}, { userId })
      }

      let module = superClass.loader(key)
      let api = module.api
      if (userId && userId !== 'undefined') {
        if(api.url == 'discovery/h5/index'){
          api.url = 'discovery/h5/index?userId='+userId
        }
      }
      let config = module.config
      let isGet = superClass.isGet(api.method)
      let options = merge(defaultOptions, config, api)

      options[isGet ? 'params' : 'data'] = params
      return new Promise(function (resolve, reject) {
        // 引入mockjs
        if (process.env.mock && process.env.NODE_ENV === 'development') {
          import(/* webpackChunkName: "Mockjs" */ 'mockjs').then(Mock => {
            let mat = module.key.split('.')
            let mod = mat[0]
            let int = mat[1]
            let url = options.url
            import(/* webpackChunkName: "mockjs" */ `../mock/${mod}.js`).then(
              mock => {
                let reg = new RegExp(url)
                Mock.mock(reg, options.method.toLowerCase(), function () {
                  return mock[int]
                })
                instanceReq(options, resolve, reject)
              }
            )
          })
        } else {
          instanceReq(options, resolve, reject)
        }
        // }
      })
    }
  }
}

export default {
  install: function (Vue, { basePath, ...options } = {}) {
    // console.log(basePath, options)
    let create = new Axios(basePath).create(options)
    // Vue.prototype.$api = Vue.api = create
    Vue.prototype.$api = Vue.api = __ce._.api = create // eslint-disable-line
  }
}
