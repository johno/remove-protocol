'use strict'

var test = require('tape')
var removeProtocol = require('..')

test('remove-protocol', function (t) {
  t.plan(3)

  var stringsWithProtocols = [
    'http://google.com',
    'https://google.com',
    'ftp://google.com'
  ]

  stringsWithProtocols.forEach(function (stringWithProtocol) {
    t.equal(removeProtocol(stringWithProtocol), 'google.com')
  })
})

test('remove-protocol with protocol-less strings', function (t) {
  t.plan(2)

  t.equal(removeProtocol('www.google.com/foo/bar'), 'www.google.com/foo/bar')
  t.equal(removeProtocol('www.google.com/foo:bar'), 'www.google.com/foo:bar')
})
