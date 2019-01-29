'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')
const { proxyTable } = require('./dev.env')

module.exports = {
  dev: {
    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '/convenient/',
    proxyTable: {
      '/api': {
        // 使用"/api"来代替"http://f.apiplus.c"
        // target: 'http://192.168.5.54:8081', // 源地址
        // target: 'http://192.168.0.128:8080', // 源地址 罗浩
        target: 'https://h5.tianfn.net:4443', // 测试地址
        changeOrigin: true, // 改变源
        pathRewrite: {
          '^/api': '' // 路径重写
        }
      }
    },

    // Various Dev Server settings
    host: 'localhost', // can be overwritten by process.env.HOST
    port: 8088, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: true,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

    // Use Eslint Loader?
    // If true, your code will be linted during bundling and
    // linting errors and warnings will be shown in the console.
    useEslint: false,
    // If true, eslint errors and warnings will also be shown in the error overlay
    // in the browser.
    showEslintErrorsInOverlay: false,

    /**
     * Source Maps
     */

    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'cheap-module-eval-source-map',

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,

    cssSourceMap: true
  },

  build: {
    // Template for index.html
    // 添加test pre prod 三处环境的配制
    prodEnv: require('./prod.env'),
    preEnv: require('./pre.env'),
    mtestEnv: require('./mtest.env'),
    index: path.resolve(__dirname, '../convenient/index.html'),

    // Paths
    assetsRoot: path.resolve(__dirname, '../convenient'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/convenient/',
    /**
     * Source Maps
     */

    productionSourceMap: false,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
