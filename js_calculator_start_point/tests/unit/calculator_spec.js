var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('can add', function(){
    calculator.add(1)
    assert.equal(1, calculator.runningTotal)
  })

  it('can subtract', function(){
    calculator.subtract(1)
    assert.equal(-1, calculator.runningTotal)
  })
  
  it('can multiply', function(){
    calculator.previousTotal = 1
    calculator.multiply(2)
    assert.equal(2, calculator.runningTotal)
  })
  
  // calculator.divide()
  it('can divide', function(){
    calculator.previousTotal = 4
    calculator.divide(2)
    assert.equal(2, calculator.runningTotal)
  })

  it('clears running total when number is clicked', function(){
    calculator.add(1)
    calculator.numberClick(3)
    assert.equal(3, calculator.runningTotal)
  })

  it('sets newTotal flag to false when number is clicked', function(){
    calculator.add(1)
    calculator.numberClick(3)
    assert.equal(false, calculator.newTotal)
  })

  // calculator.numberClick()
  
  // calculator.operatorClick()
  
  // calculator.clearClick()

});
