/**
 * Create a TheToken instance
 * @function create
 * @param {...*} args
 * @returns {TheToken}
 */
'use strict'

const TheToken = require('./TheToken')

/** @lends create */
function create (...args) {
  return new TheToken(...args)
}

module.exports = create
