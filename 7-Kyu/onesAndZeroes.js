/**
 * Ones and Zeroes
 * https://www.codewars.com/kata/578553c3a1b8d5c40300037c/train/javascript
 * 
 * Given an array of ones and zeroes, convert the equivalent binary value to an integer.

  Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.
 */

  const binaryArrayToNumber = arr => {
    let result = 0
    arr.reverse().forEach((elem, index) => elem === 1 ? result = result + Math.pow(2, index) : 0)
    return result
  };

  // REFACTOR - using map and reduce

  const binaryArrayToNumber2 = arr => {
    return arr.reverse().map((e, i) => e === 1 ? Math.pow(2, i) : 0).reduce((a,c) => a + c, 0)
  };

  // Alternatives
  const binaryArrayToNumber3 = arr => {
    return parseInt(arr.join(""), 2)
  };

  function binaryArrayToNumber(arr) {
    return arr.reduce( (a, b) => a << 1 | b );
  }

  const binaryArrayToNumber = arr => {
    return arr.reduce((total, cur) => (total = total * 2 + cur), 0);
  }


  /**
  
    P-arameters
      Given: array of integers: 0s and 1s
      
      binary #'s roughly are 2^x, where x would correspond to the inverse of the index
        because binary #'s roughly go from left to right'
        
      while the examples all have 4 places, the given array is not limited to 4 elements
      
      could the array every be empty?
      what is the minimum # of elements int he given array?
      
    R-eturn
      integer - decimal equivalent to provided binary #
    E-xamples
      Testing: [0, 0, 0, 1] ==> 1
      Testing: [0, 0, 1, 0] ==> 2
      Testing: [0, 1, 0, 1] ==> 5
      Testing: [1, 0, 0, 1] ==> 9
      Testing: [0, 0, 1, 0] ==> 2
      Testing: [0, 1, 1, 0] ==> 6
      Testing: [1, 1, 1, 1] ==> 15
      Testing: [1, 0, 1, 1] ==> 11
  
    P-seudocode
      since binary #s have a relationship to 2^x ascending from right to left
      reversing the given array should allow me to use each elemts index as 'x'
      I should be doing 2^index for all "1" elements, but I should not use the filter
        method, because that will not preserve the original inverse index
      Conditional logic to only add 1 elements is needed.
  
  */