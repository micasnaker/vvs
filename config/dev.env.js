'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  // 配置开发环境
  API_PATH_DEV:'"http://114.55.116.174:81/apisc"',
  // 生产线上环境
  API_PATH_PROD:'"http://api.tumujinhua.com"',
})
