/**
 * https://www.codewars.com/kata/5a63948acadebff56f000018/train/javascript
 * 
 * Introduction and Warm-up (Highly recommended)

Playing With Lists/Arrays Series

Task

Given an array/list [] of integers , Find the product of the k maximal numbers.

Notes

Array/list size is at least 3 .

Array/list's numbers Will be mixture of positives , negatives and zeros

Repetition of numbers in the array/list could occur.

Input >> Output Examples

maxProduct ({4, 3, 5}, 2) ==>  return (20)
Explanation:

Since the size (k) equal 2 , then the subsequence of size 2 whose gives product of maxima is 5 * 4 = 20 .
maxProduct ({8, 10 , 9, 7}, 3) ==>  return (720)
Explanation:

Since the size (k) equal 3 , then the subsequence of size 3 whose gives product of maxima is  8 * 9 * 10 = 720 .
maxProduct ({10, 8, 3, 2, 1, 4, 10}, 5) ==> return (9600)
Explanation:

Since the size (k) equal 5 , then the subsequence of size 5 whose gives product of maxima is  10 * 10 * 8 * 4 * 3 = 9600 .
maxProduct ({-4, -27, -15, -6, -1}, 2) ==> return (4)
Explanation:

Since the size (k) equal 2 , then the subsequence of size 2 whose gives product of maxima is  -4 * -1 = 4 .
maxProduct ({10, 3, -1, -27} , 3)  return (-30)
Explanation:

Since the size (k) equal 3 , then the subsequence of size 3 whose gives product of maxima is 10 * 3 * -1 = -30 .
 */

function maxProduct(numbers, size){
  function compareFunction(a,b) {
    return b - a
  }
  
  return numbers.sort(compareFunction).slice(0, size).reduce((acc, curr) => acc * curr, 1)
}
/**
P-arameters
  takes in: array of integers
            size(k) >= 3
            mix of positive, negative numbers and zeroes
            repition could occur
R-eturn
  Integer - highest product possible by multiplying k(size) numberd

E-xamples
  maxProduct ({4, 3, 5}, 2) ==>  return (20)
  maxProduct ({8, 10 , 9, 7}, 3) ==>  return (720)
  maxProduct ({10, 8, 3, 2, 1, 4, 10}, 5) ==> return (9600)
  maxProduct ({-4, -27, -15, -6, -1}, 2) ==> return (4)
  maxProduct ({10, 3, -1, -27} , 3)  return (-30)
  
P-sudocode
  We know to get the maximum product, we should me multiplying the highest numbers
  We know that the array has at least 3 numbers
  If we sort the array we can easily access the highest numbers at either the lowest indexes or at the highest indeces, depending on sorting method
  We can use size given to access and adjust them to a zero index to find the #s we are looking for
  eg: if size = 3, after sorting we know that the indexes 0,1 and 2 will contain the highest #'s that we need to multiply'
  
  note: compare function needed to use.sort() on an array of numbers because sort() is alphanumeric
     function compareFunction(a,b) {
//       1. < 0 ...a
//       2. 0 ... nothing will be changed
//       3. > 0 ... b comes first
      return b - a // returns array in descending order (highest number at 0 index)
      return a - b // returns array in ascending order (highest number at size -1 index)
  }
  
  alternative to including compare function could be:
  numbers.sort(function(a,b){return a - b})
  numbers.sort(function(a,b){return b - a})
*/