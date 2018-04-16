'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_API: '"//testv2.decentraverse.io"',
  BASE_HOST:'"api"',
  BASE_DOMAIN: `"testv2.decentraverse.io"`,
})
