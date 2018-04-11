'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_API: '"http://testv2.decentraverse.io"',
  // BASE_API: '"http://127.0.0.1"',
  BASE_HOST:'"api"',
  BASE_DOMAIN: 'http://127.0.0.1:8000',
})
