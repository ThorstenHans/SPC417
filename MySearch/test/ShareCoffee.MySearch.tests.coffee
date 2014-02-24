chai = require 'chai'
sinon = require 'sinon'
chai.should()

root = global ? window

describe 'ShareCoffee.MySearch', ->

  it 'should throw an loadError when ShareCoffee is not loaded', ->
    (-> require('ShareCoffee.MySearch')).should.throw ''

