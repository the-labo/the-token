/**
 * Token generator for the-framework
 * @module the-token
 */
'use strict'

const TheToken = require('./TheToken')
const create = require('./create')

const lib = create.bind(this)

Object.assign(lib, {
  TheToken,
  create
})

module.exports = lib
