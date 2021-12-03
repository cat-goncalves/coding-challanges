/*
https://www.codewars.com/kata/545a4c5a61aa4c6916000755/train/javascript

Description:
As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

The input to the function will be an array of three distinct numbers (Haskell: a tuple).

For example:

gimme([2, 3, 1]) => 0
2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

Another example (just to make sure it is clear):

gimme([5, 10, 14]) => 1
10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.
*/

var gimme = function (inputArray) {
  return inputArray.length - inputArray.indexOf(Math.max(...inputArray)) - inputArray.indexOf(Math.min(...inputArray))
};

//P: triplet array
//R: index of element that is between the highest and lowest number
//      - will it always be a triplt
//      - will it always be an array or an array of numbers?
//      - will the given array always include positive integers?
//E: [2, 3, 1] , [5, 10, 14]
//P: find index of element that is NOT highest + lowest

//Top Solutions:
function gimme(a) {
  return a.indexOf(a.concat().sort(function(a, b) { return a - b })[1])
}
//a.indexOf, simple enough. this is looking for the index of the middle element
// indexOf we have our logic to find the middle element
// using a.concat() to copy the given array
// sorting the copied array (i would use an array function for this, achieves the same result)
// outside of the sort we are targeting the [1] indec
// this will always deliver the middle element of the copied and sorted array

//How I would write this:
        var gimme = function(inputArray) {
          return inputAray.indexOf(inputAray.concat().sort((a, b) => a - b)[1])
        }

var gimme = function (inputArray) {
  return inputArray.indexOf(inputArray.slice(0).sort(function(a,b) { return a-b; })[1]);
};

const gimme = function (arr) {
  return arr.indexOf([...arr].sort((x, y) => x > y)[1]);
};