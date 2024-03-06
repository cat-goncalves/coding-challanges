/**
 * https://www.codewars.com/kata/5679aa472b8f57fb8c000047/train/javascript
 * 
  You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.

  For example:

  Let's say you are given the array {1,2,3,4,3,2,1}:
  Your function will return the index 3, because at the 3rd position of the array, the sum of left side of the index ({1,2,3}) and the sum of the right side of the index ({3,2,1}) both equal 6.

  Let's look at another one.
  You are given the array {1,100,50,-51,1,1}:
  Your function will return the index 1, because at the 1st position of the array, the sum of left side of the index ({1}) and the sum of the right side of the index ({50,-51,1,1}) both equal 1.

  Last one:
  You are given the array {20,10,-80,10,10,15,35}
  At index 0 the left side is {}
  The right side is {10,-80,10,10,15,35}
  They both are equal to 0 when added. (Empty arrays are equal to 0 in this problem)
  Index 0 is the place where the left side and right side are equal.

  Note: Please remember that in most languages the index of an array starts at 0.

  Input

  An integer array of length 0 < arr < 1000. The numbers in the array can be any integer positive or negative.

  Output

  The lowest index N where the side to the left of N is equal to the side to the right of N. If you do not find an index that fits these rules, then you will return -1.

  Note

  If you are given an array with multiple answers, return the lowest correct index.
  */

function findEvenIndex(arr){
  if (arr.length === 0) {
    return 0
  }
  
  for(let x = 0; x < arr.length; x++) {
    let leftArr = x === 0 ? 0 : arr.slice(0, x).reduce((a,c) => a + c, 0)
    let rightArr = arr.slice(x + 1).reduce((a,c) => a + c, 0)
    
    if(leftArr === rightArr) {
      return x
    }
  }
  
  return -1
}

/**

  P-arameters
    given: array of integers
      0 < arr < 1000
    empty arrays equal to 0

  R-eturn
    lowest index N (integer) where all the numbers to the left of k = the numbers to the right of k
    if no index fits these rules, return -1

  E-xamples
    {1,2,3,4,3,2,1}, 3
    {1,100,50,-51,1,1}, 1
    {20,10,-80,10,10,15,35}, 0
    {}, -1

  P-seudocode
    1. check for an empty array, and return 0 if empty array is found
    2. iterate through the array
    3. slice or splice the indexes to the left and right of the array
        left value is 0 at the 0 index
    4. return -1 if no comparison


*/