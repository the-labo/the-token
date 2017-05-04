'use strict'

const theToken = require('the-token')

async function tryExample () {
  let token01 = theToken.generate()
  console.log(token01)
}

tryExample().catch((err) => console.error(err))
