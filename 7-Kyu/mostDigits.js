/*
https://www.codewars.com/kata/58daa7617332e59593000006/train/javascript

Find the number with the most digits.

If two numbers in the argument array have the same number of digits, return the first one in the array.
*/

function findLongest(array){
  let digitCount = 0
  let longestNum 
  console.log(array)
  array.forEach( x => {
    if(x.toString().length > digitCount){
      digitCount = x.toString().length
      longestNum = x
    }
  })
  return longestNum
}