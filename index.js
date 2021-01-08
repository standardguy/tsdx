
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./insticatorsession.cjs.production.min.js')
} else {
  module.exports = require('./insticatorsession.cjs.development.js')
}
