'use strict'

var test = require('tape')
var removeProtocol = require('..')

test('remove-protocol', function (t) {
  t.plan(1)

  t.equal(removeProtocol(), true)
})
