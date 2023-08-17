/*
https://www.codewars.com/kata/5748838ce2fab90b86001b1a/solutions/javascript

Description:
Complete the function that calculates the area of the red square, when the length of the circular arc A is given as the input. Return the result rounded to two decimals.
*/

function squareArea(A){
  let side = ((A * 4) / Math.PI) / 2
  return Number((side * side).toFixed(2))
}