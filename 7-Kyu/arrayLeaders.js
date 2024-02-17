/**
 * https://www.codewars.com/kata/5a651865fd56cb55760000e0/train/javascript
 * 
 * Introduction and Warm-up (Highly recommended)

Playing With Lists/Arrays Series

Definition

An element is leader if it is greater than The Sum all the elements to its right side.

Task

Given an array/list [] of integers , Find all the LEADERS in the array.

Notes

Array/list size is at least 3 .

Array/list's numbers Will be mixture of positives , negatives and zeros

Repetition of numbers in the array/list could occur.

Returned Array/list should store the leading numbers in the same order in the original array/list .

Input >> Output Examples

arrayLeaders ({1, 2, 3, 4, 0}) ==> return {4}
Explanation:

4 is greater than the sum all the elements to its right side

Note : The last element 0 is equal to right sum of its elements (abstract zero).

arrayLeaders ({16, 17, 4, 3, 5, 2}) ==> return {17, 5, 2}
Explanation:

17 is greater than the sum all the elements to its right side

5 is greater than the sum all the elements to its right side

Note : The last element  2 is greater than the sum of its right elements (abstract zero).

arrayLeaders ({5, 2, -1}) ==> return {5, 2}
Explanation:

5 is greater than the sum all the elements to its right side

2 is greater than the sum all the elements to its right side

Note : The last element  -1 is less than the sum of its right elements (abstract zero).

arrayLeaders ({0, -1, -29, 3, 2}) ==> return {0, -1, 3, 2}
Explanation:

0 is greater than the sum all the elements to its right side

-1 is greater than the sum all the elements to its right side

3 is greater than the sum all the elements to its right side

Note : The last element  2 is greater than the sum of its right elements (abstract zero).
 */

function arrayLeaders(numbers){
  return numbers.filter((currentValue, index) => currentValue > numbers.slice(index + 1).reduce((a,c) => a + c, 0))
}

/**

P-arameters
  element leader: a number that is greater than the sum of all the numbers to the right
  given: array of integers
          array.size() >= 3
          positive, negative, zeros
          numbers CAN repear

R-eturn
    array of integers
    ALL element leaders
    In the same order as the original array

E-xamples
    arrayLeaders ({1, 2, 3, 4, 0}) ==> return {4}
    arrayLeaders ({16, 17, 4, 3, 5, 2}) ==> return {17, 5, 2}
    arrayLeaders ({5, 2, -1}) ==> return {5, 2}
    
P-seudocode
    iterate through the array
    compare each index to all of the indexes after it
    we can use filter and use the sum of all subsequent indexes as the logic for out T/F logic
    We can iterate throught the array, sum a slice of the array after the current index and populate a new array with the values


*/