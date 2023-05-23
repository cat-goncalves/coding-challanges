/*
https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad/solutions/javascript

Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
invert([]) == []
You can assume that all values are integers. Do not mutate the input array/list.
*/

function invert(array) {
  let invertedArray = [] 
  for (let i = 0; i < array.length; i++){
    invertedArray.push(array[i] * -1)
  }
  return invertedArray;
}

/*
Most Popular Answer:

function invert(array) {
   return array.map( x => x === 0 ? x : -x);
}

The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

*/