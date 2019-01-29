'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  EVN_CONFIG: '"dev"',
  baseURL: '"/api/creditvane-ui-api/rest/api/"', // 配置指向的url
  ctxUrl: '"http://192.168.0.128:8080"',
  mock: false,
  imgUrl: '"/convenient/static/"',
  proxyTable: {
    '/api': {
      // 使用"/api"来代替"http://f.apiplus.c"
      target: 'https://fxb.tianfn.net:4443', // 源地址
      changeOrigin: true, // 改变源
      pathRewrite: {
        '^/api': '' // 路径重写
      }
    }
  }
})
