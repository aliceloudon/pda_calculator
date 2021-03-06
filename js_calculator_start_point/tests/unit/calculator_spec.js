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
    calculator.previousTotal = 1
    calculator.add(4)
    assert.equal(5, calculator.runningTotal)
  })

  it('can subtract', function(){
    calculator.previousTotal = 7
    calculator.subtract(4)
    assert.equal(3, calculator.runningTotal)
  })
  
  it('can multiply', function(){
    calculator.previousTotal = 3
    calculator.multiply(5)
    assert.equal(15, calculator.runningTotal)
  })
  
  it('can divide', function(){
    calculator.previousTotal = 21
    calculator.divide(7)
    assert.equal(3, calculator.runningTotal)
  })

  it('concatenates multiple number button clicks', function(){
    calculator.numberClick(5)
    calculator.numberClick(2)
    assert.equal(52, calculator.runningTotal)
  })

  it('clears and updates running total when number is clicked', function(){
    calculator.runningTotal = 5
    calculator.numberClick(3)
    assert.equal(3, calculator.runningTotal)
  })

  it('sets newTotal flag to false when number is clicked', function(){
    calculator.add(1)
    calculator.numberClick(3)
    assert.equal(false, calculator.newTotal)
  })

  it('on operator click, performs the operation for the previous operator', function(){
    calculator.previousTotal = 10
    calculator.previousOperator = '-'
    calculator.runningTotal = 3
    calculator.operatorClick('+')
    assert.equal(7, calculator.runningTotal)
  })
  
  it('on operator click, clears the previous operator if the equals button is clicked', function(){
    calculator.previousOperator = '+'
    calculator.operatorClick('=')
    assert.equal(null, calculator.previousOperator)
  })

  it('on operator click, records what the previous operator was if an operator other than equals is clicked', function(){
    calculator.previousOperator = '+'
    calculator.operatorClick('-')
    assert.equal('-', calculator.previousOperator)
  })

  it('on operator click, replaces the previous total with the current running total', function(){
    this.previousTotal = 10
    calculator.operatorClick('+')
    assert.equal(0, calculator.runningTotal)
  })

  it('on operator click, flags that a new total has been calculated', function(){
    calculator.operatorClick('+')
    assert.equal(true, calculator.newTotal)
  })

  it('clears runningTotal when clearClick is called', function(){
    calculator.runningTotal = 10
    calculator.clearClick()
    assert.equal(0, calculator.runningTotal)
  })

  it('clears previousOperator when clearClick is called', function(){
    calculator.previousOperator = '='
    calculator.clearClick()
    assert.equal(null, calculator.previousOperator)
  })
    
  it('sets previousTotal to null when clearClick is called', function(){
    calculator.previousTotal = 10
    calculator.clearClick()
    assert.equal(null, calculator.previousTotal)
  })

});
