/*
https://www.codewars.com/kata/576b93db1129fcf2200001e6/solutions/javascript

Description:
Sum all the numbers of the array (in F# and Haskell you get a list) except the highest and the lowest element (the value, not the index!).
(The highest/lowest element is respectively only one element at each edge, even if there are more than one with the same value!)

Example:

{ 6, 2, 1, 8, 10 } => 16
{ 1, 1, 11, 2, 3 } => 6

If array is empty, null or None, or if only 1 Element exists, return 0.
Note:In C++ instead null an empty vector is used. In C there is no null. ;-)
*/

function sumArray(array) {
  if (array === null || array.length <= 2){
    return 0
  } else if (array.length === 3){
    array.sort((a,b) => a -b)
    return array[1]
  }else {
    return array.sort((a,b) => a - b).slice(1, array.length - 1).reduce( (a,b) => a + b)
  }
}

/*
function sumArray(array) {
  return Array.isArray(array) && array.length > 1
    ? array.reduce((s, n) => s + n, 0) - Math.min(...array) - Math.max(...array)
    : 0
}

*/