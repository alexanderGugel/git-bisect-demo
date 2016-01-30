'use strict'

var assert = require('assert')
var fourtyTwo = require('./').fourtyTwo

assert.equal(fourtyTwo(), 42, 'fourtyTwo should return 42')
