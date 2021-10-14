// https://www.codewars.com/kata/57a1fd2ce298a731b20006a4/solutions/javascript

// Write a function that checks if a given string (case insensitive) is a palindrome.

function isPalindrome(x) {
  if (x.toLowerCase() == x.toLowerCase().split('').reverse().join('')) {return true}
  else {return false}
}

// Most Popular Solution
// const isPalindrome = (x) => {
//   return x.split("").reverse().join("").toLowerCase() === x.toLowerCase() ? true : false
// }