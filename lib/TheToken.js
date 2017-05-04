/**
 * Token generator
 * @class TheToken
 */
'use strict'

const abind = require('abind')
const crypto = require('crypto')

/** @lends TheToken */
class TheToken {
  constructor (options = {}) {
    const s = this
    let {
      bytes = 32,
      encode = 'base64'
    } = options
    s.bytes = bytes
    s.encode = encode
    abind(s)
  }

  /**
   * Generate a token string
   * @returns {string}
   */
  generate () {
    const s = this
    const { bytes, encode } = s
    return crypto.randomBytes(bytes).toString(encode)
  }

  /**
   * Bind generator
   * @returns {function}
   */
  bind () {
    const s = this
    let { generate } = s
    let bound = generate.bind(s)
    return bound
  }
}

module.exports = TheToken
