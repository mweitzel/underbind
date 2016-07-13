var test = require('tape')
  , _bind = require('..')

_bind.englobal()

function thisAndArgs() {
  "use strict"
  return [this].concat(Array.prototype.slice.call(arguments))
}

test('test fn returns array like [this, arg0, arg1, ...]', function(t) {
  t.deepEqual(
    thisAndArgs.call(5, 6, 7)
  , [5,6,7]
  )
  t.end()
})

test('_b does not bind context, and context can still be bound later', function(t) {
  t.deepEqual(
    thisAndArgs._b(6, 7)._b(8)._b()._b()._b()._b()._b()._b().call(5)
  , [5,6,7,8]
  )
  t.end()
})
test('_b can accept multiple arguments', function(t) {
  t.deepEqual(
    thisAndArgs._b(6, 7).call(5)
  , [5,6,7]
  )
  t.end()
})
test('_b can be called before and after bind', function(t) {
  t.deepEqual(
    thisAndArgs._b(6).bind(5)._b(7).call()
  , [5,6,7]
  )
  t.end()
})

function args(...through) { return through }

test('_b does nothing with no args but can still be chained', function(t) {
  t.deepEqual(
    args
      ._b(6, 7)
      ._b(8)
      ._b()._b()._b()._b()._b()._b()._b()._b()._b()._b()._b()._b()
      (9,10)
  , [6,7,8,9,10]
  )
  t.end()
})

test('englobal can be called multiple times', function(t) {
  _bind.englobal()
  _bind.englobal()
  t.end()
})
