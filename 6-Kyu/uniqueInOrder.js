/*
https://www.codewars.com/kata/54e6533c92449cc251001667/train/javascript

Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]
*/

let uniqueInOrder=function(iterable){
  if (typeof iterable === 'string'){
    let arr = iterable.split('')
    return arr.filter((element, index) => element !== arr[index + 1])
  } else {
    return iterable.filter((element, index) => element !== iterable[index + 1])
  }
}