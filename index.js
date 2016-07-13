'use strict'

var once = require('once')

module.exports = partial

function partial(...partialArgs) {
  var fn = this
  return function(...calledArgs) {
    return fn.apply(this, partialArgs.concat(calledArgs))
  }
}

partial.englobal = once(() => (
    Object.defineProperty(
      Function.prototype
    , '_bind'
    , { get: function() { return partial.bind(this) } }
    )
  , Object.defineProperty(
      Function.prototype
    , '_b'
    , { get: function() { return partial.bind(this) } }
    )
  )
)
