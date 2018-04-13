'use strict'
const merge = require('webpack-merge')
const devEnv = require('./dev.env')

module.exports = merge(devEnv, {
  NODE_ENV: '"testing"',
  BASE_API: '"//www.decentraverse.io"',
  BASE_HOST:'"api"',
  BASE_DOMAIN: `"www://prev2.decentraverse.io"`,
})
