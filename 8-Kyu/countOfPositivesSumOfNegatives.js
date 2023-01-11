/*
https://www.codewars.com/kata/576bb71bbbcf0951d5000044/solutions/javascript

Description:
Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.

If the input array is empty or null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
*/

function countPositivesSumNegatives(input) {
  if (input === null || input.length === 0){
    return []
  }
  let inputSorted = input.sort((a, b) => a - b)
  let output = []
  let positives = input.map(x => x > 0).filter(Boolean)
  let negatives = inputSorted.slice(0,inputSorted.map(x => x < 0).filter(Boolean).length)
  output.push(positives.length)
  output.push(negatives.reduce((a,b) => a + b ))
  return output
}

/*
Alternative Solutions
function countPositivesSumNegatives(input) {
    return input && input.length ? [input.filter(p => p > 0).length, input.filter(n => n < 0).reduce((a, b) => a + b, 0)] : [];
}
*/