/**
 * https://leetcode.com/problems/power-of-two/?envType=daily-question&envId=2024-02-19
 * 
 * Given an integer n, return true if it is a power of two. Otherwise, return false.

  An integer n is a power of two, if there exists an integer x such that n == 2x.

  Example 1:
    Input: n = 1
    Output: true
    Explanation: 20 = 1

  Example 2:
    Input: n = 16
    Output: true
    Explanation: 24 = 16

  Example 3:
    Input: n = 3
    Output: false
  
  Constraints:
  -231 <= n <= 231 - 1
  
  Follow up: Could you solve it without loops/recursion?

 * @param {number} n
 * @return {boolean}
 */

// Interation through all given paramers of 2^x
var isPowerOfTwo = function(n) {
  for(let x = -31; x <= 31; x++){
      if(Math.pow(2, x) === n) {
          return true
      }
  }
  return false
};

/** 
 * The Math.log() static method returns the natural logarithm (base e) of a number.
 * this function is an example of the logarithm y with base x
   function getBaseLog(x, y) {
      return Math.log(y) / Math.log(x);
    }
*/ 

var isPowerOfTwo = function(n) {
  return Number.isInteger(Math.log(n) / Math.log(2))
};

// The Math.log2() static method returns the base 2 logarithm of a number. also: Math.log10()
var isPowerOfTwo = function(b) {
  return Number.isInteger(Math.log2(n))
}

/**

P-arameters
  integer n

R-eturn
  boolean
  true if n is a power of 2

E-xamples
  Example 1:
      Input: n = 1
      Output: true
      Explanation: 20 = 1

  Example 2:
      Input: n = 16
      Output: true
      Explanation: 24 = 16

  Example 3:
      Input: n = 3
      Output: false

P-seudocode
  I could manuall loop through -31 to 31 and compare using Math.pow()
  I could use Math.log(2, n) and check if the remainder is even
      I can confirm that the number is whole with the modulus
      Or, by using isInteger()


*/