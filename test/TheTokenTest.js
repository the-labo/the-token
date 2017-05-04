/**
 * Test for TheToken.
 * Runs with mocha.
 */
'use strict'

const TheToken = require('../lib/TheToken')
const { ok, equal } = require('assert')

describe('the-token', () => {
  before(() => {
  })

  after(() => {
  })

  it('Do test', () => {
    ok(TheToken)

    let token01 = new TheToken().generate()
    ok(token01)

    let token02 = (new TheToken().bind())()
    ok(token02)
  })
})

/* global describe, before, after, it */
