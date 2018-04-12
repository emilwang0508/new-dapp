'use strict'
const merge = require('webpack-merge')
const devEnv = require('./dev.env')

module.exports = merge(devEnv, {
  NODE_ENV: '"testing"',
  BASE_API: '"http://testv2.decentraverse.io"',
  BASE_HOST:'"api"',
  BASE_DOMAIN: `"testv2\.decentraverse\.io"`,
})
