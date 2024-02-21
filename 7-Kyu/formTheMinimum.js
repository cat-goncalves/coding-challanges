/**
 * https://www.codewars.com/kata/5ac6932b2f317b96980000ca/train/javascript
 * 
 * Form the Minimum
 * 
 * Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates).

    Notes:

    Only positive integers will be passed to the function (> 0 ), no negatives or zeros
 */

    // Filter
function minValue(values){
  return Number(values.sort(function(a,b){return a - b}).filter((x, i) => i === values.lastIndexOf(x)).join(""))
}

// Array.From()
function minValue(values){
  return Number(Array.from(new Set(values)).sort().join(''))
}

/**

  P-arameters
    array of integers all > 0, no negatives or zeroes
    can contain duplicates

  R-eturn
    integer: smallest number possible formed from the digits, excluding duplicated

  E-xamples
    minValue ({1, 3, 1})  ==> return (13)
    minValue({5, 7, 5, 9, 7})  ==> return (579)
    minValue({1, 9, 3, 1, 7, 4, 6, 6, 7}) return  ==> (134679)

  P-seudocode
    sorting the array will give roughly the correct number order
    remove duplicates: filter, can use another iterative method
      Logic for removing duplicates:  first index === last index
                                      filter that specific index.length === 1
    join array together - this will return a string
    convert to number

*/