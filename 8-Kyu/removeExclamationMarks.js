/*
https://www.codewars.com/kata/57a0885cbb9944e24c00008e/solutions/javascript

Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
ttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
*/


function removeExclamationMarks(s) {
  return s.replace(/!/g, '');
}