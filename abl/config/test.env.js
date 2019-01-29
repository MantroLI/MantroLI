'use strict'
const merge = require('webpack-merge')
const devEnv = require('./dev.env')

module.exports = merge(devEnv, {
  EVN_CONFIG: '"test"',
  NODE_ENV: '"testing"'
})
