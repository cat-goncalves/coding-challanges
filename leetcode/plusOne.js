/*

*/

var plusOne = function(digits) {
  let num = Number(digits.join('')) + 1
  return num.toString().split('')
};