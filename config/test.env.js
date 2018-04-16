'use strict'
const merge = require('webpack-merge')
const devEnv = require('./dev.env')

module.exports = merge(devEnv, {
  NODE_ENV: '"testing"',
  BASE_API: '"//decentraverse.io"',
  BASE_HOST:'"api"',
  BASE_DOMAIN: `"decentraverse.io"`,
})
