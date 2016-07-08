module.exports = _bind

function _bind() {
  'use strict'
  var a = this
    , args = Array.prototype.slice.call(arguments)
  return function() {
    return a.apply(this||a, args.concat(Array.prototype.slice.call(arguments)))
  }
}
