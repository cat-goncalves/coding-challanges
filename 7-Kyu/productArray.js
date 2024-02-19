/**
 * https://www.codewars.com/kata/5a905c2157c562994900009d/train/javascript
 * 
 * Introduction and Warm-up (Highly recommended)

    Playing With Lists/Arrays Series

    Task

    Given an array/list [] of integers , Construct a product array Of same size Such That prod[i] is equal to The Product of all the elements of Arr[] except Arr[i].

    Notes

    Array/list size is at least 2 .

    Array/list's numbers Will be only Positives

    Repetition of numbers in the array/list could occur.

 */

    // for loor
function productArray(numbers){
  let prod = []
  
  for(let x = 0; x < numbers.length; x++) {
    prod[x] = numbers.reduce((a, c) => a * c) / numbers[x]
  }
  return prod
}

// map taking in reduce as argument
function productArray(numbers){
  return numbers.map(x => numbers.reduce((a, c) => a * c) / x)
}
/**

  P-arameters
    array of integers

  R-eturn
    product array: product of all elements of arr where prod[i] 
      = product of all elements of arr[] except arr[i]
    same prodArr.size === arr.size
    arr.length >= 2
    only positive (any zeroes?)
    repition of numbers could occur

  E-xamples
    productArray ({12,20}) ==>  return {20,12}
    productArray ({1,5,2}) ==> return {10,2,5}
    productArray ({10,3,5,6,2}) return ==> {180,600,360,300,900}

  P-seudocode
    given array of int
    return new array of int
    productArray ({a, b, c} ==> return {bc, ac, ab})
    use a for loop with reduce
    we could use the map and reduce

*/