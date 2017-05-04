/**
 * Token generator for the-framework
 * @module the-token
 */
'use strict'

const TheToken = require('./TheToken')
const create = require('./create')

const singleton = create({})

Object.assign(singleton, {
  TheToken,
  create
})

module.exports = singleton
