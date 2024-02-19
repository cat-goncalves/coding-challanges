/**
 * https://www.codewars.com/kata/5a7893ef0025e9eb50000013/train/javascript
 * 
 * Introduction and Warm-up (Highly recommended)

Playing With Lists/Arrays Series

Task

Given an array/list [] of integers , Find The maximum difference between the successive elements in its sorted form.

Notes

Array/list size is at least 3 .

Array/list's numbers Will be mixture of positives and negatives also zeros_

Repetition of numbers in the array/list could occur.

The Maximum Gap is computed Regardless the sign.

Input >> Output Examples

maxGap ({13,10,5,2,9}) ==> return (4)
Explanation:

The Maximum Gap after sorting the array is 4 , The difference between  9 - 5 = 4 .
maxGap ({-3,-27,-4,-2}) ==> return (23)
Explanation:

The Maximum Gap after sorting the array is 23 , The difference between   |-4- (-27) | = 23 .

Note : Regardless the sign of negativity .

maxGap ({-7,-42,-809,-14,-12}) ==> return (767)  
Explanation:

The Maximum Gap after sorting the array is 767 , The difference between   | -809- (-42) | = 767 .

Note : Regardless the sign of negativity .

maxGap ({-54,37,0,64,640,0,-15}) //return (576)
Explanation:

The Maximum Gap after sorting the array is 576 , The difference between   | 64 - 640 | = 576 .

Note : Regardless the sign of negativity .
 */

function maxGap (numbers){
  let maxGapInt = 0;
  let diff = 0

  numbers.sort(function(a,b){return b - a}) //high to low sorting

  for(let x = 0; x < numbers.length - 1; x++){
    diff = numbers[x] - numbers[x + 1]
    if(diff > maxGapInt || diff * (-1) > maxGapInt){
      maxGapInt = diff
    }
  }
  
  return maxGapInt
}

function maxGap(numbers) {
 return Math.max(...numbers.sort((a, b) => a - b).slice(1).map((val, idx) => val - numbers[idx]))
}

/**

  P-arameters
    array of integers
    size >= 3
    misture of positives, negatives and zeros
    repition of numbers can occur

  R-eturn
    integer
    regardless of sign negativity (if the gap is negative the maxgap return would be positive)
    maximum gap: maximum difference between successive elements in its sorted form

  E-xamples
    maxGap ({13,10,5,2,9}) ==> return (4)
    maxGap ({-3,-27,-4,-2}) ==> return (23)
    maxGap ({-54,37,0,64,640,0,-15}) //return (576)

  P-seudocode
    sort array
    iterate through the array and compare current index to the following index

*/