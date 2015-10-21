import test from 'ava'
import removeProtocol from './'

const stringsWithProtocols = [
  'http://google.com',
  'https://google.com',
  'ftp://google.com'
]

test('remove-protocol', t => {
  t.plan(stringsWithProtocols.length)

  stringsWithProtocols.forEach(stringWithProtocol => {
    t.same(removeProtocol(stringWithProtocol), 'google.com')
  })
})

test('remove-protocol with protocol-less strings', t => {
  t.plan(2)

  t.same(removeProtocol('www.google.com/foo/bar'), 'www.google.com/foo/bar')
  t.same(removeProtocol('www.google.com/foo:bar'), 'www.google.com/foo:bar')
})
