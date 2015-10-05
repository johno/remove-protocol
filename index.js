'use strict'

module.exports = function removeProtocol (stringWithProtocol) {
  if (typeof stringWithProtocol !== 'string') {
    throw new TypeError('remove-protocol expected a string')
  }

  return stringWithProtocol.replace(/^.*?:\/\//, '')
}
