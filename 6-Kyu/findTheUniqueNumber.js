/**
 * https://www.codewars.com/kata/585d7d5adb20cf33cb000235
 * 
 * Find the Unique Number
 * 
 * There is an array with some numbers. All numbers are equal except for one. Try to find it!
 * 
 * It’s guaranteed that array contains at least 3 numbers.

  The tests contain some very huge arrays, so think about performance.
 */

// brute force solution with sort
function findUniq(arr) {
  arr = arr.sort(function(a,b){return a - b})
  
  if (arr[0] == arr[1]) {
    return arr.pop()
  } else {
    return arr[0]
  }
}

// simplified filter with sort
function findUniq(arr) {
  arr.sort((a,b)=>a-b);
  return arr[0]==arr[1] ? arr.pop() : arr[0]
}

function findUniq(arr) {
  return arr.find(x => arr.indexOf(x) == arr.lastIndexOf(x))
}


/**

  P-arameters
    array of numbers, all the same except one
    array.length >= 3

  R-eturn
    the single number that is not like the others

  E-xamples
    findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
    findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55

  P-seudocode  
    sort: If we sort the array we know that it is either arr[0] or arr[arr.length - 1] / arr.pop()
      - once the array is sorted it is either the first or last element
      
    find: returns
    

*/
