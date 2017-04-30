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

  // it('can subtract', function(){
  //   calculator.subtract(5)
  // })
  

  // calculator.multiply()
  
  // calculator.divide()
  
  // calculator.numberClick()
  
  // calculator.operatorClick()
  
  // calculator.clearClick()

});
