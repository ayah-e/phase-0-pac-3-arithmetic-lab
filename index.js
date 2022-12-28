function add(a,b) {
    return a + b;
}

function subtract(a,b) {
    return a - b;
}

function multiply(a,b) {
    return a * b;
}

function divide(a,b) {
    return a / b;
}

it('increment(n) increments n and returns the result', function() {
    expect(increment(a)).toEqual(a + 1)
  })

  function increment(n) {
    return (n += 1);
  }
  
  it('decrement(n) decrements n and returns the result', function() {
    expect(decrement(a)).toEqual(a - 1)
  })

  function decrement(n) {
    return (n -= 1);
  }

  describe('makeInt(n)', function() {
    it('parses n as an integer and returns the parsed integer', function() {
      expect(makeInt(a.toString())).toEqual(a)
    })
  
    it('assumes base 10', function() {
      expect(makeInt('0x2328')).toEqual(0)
    })
  
    it('returns NaN as appropriate', function() {
      expect(isNaN(makeInt('sldkjflksjf'))).toEqual(true)
    })
  })

  function makeInt(string) {
    return parseInt(string,10);
  }

  function preserveDecimal(string) {
    return parseFloat(string);
  }





