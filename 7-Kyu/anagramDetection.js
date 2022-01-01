/*
https://www.codewars.com/kata/529eef7a9194e0cbc1000255/solutions/javascript

Description:
An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

Note: anagrams are case insensitive

Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

Examples
"foefet" is an anagram of "toffee"

"Buckethead" is an anagram of "DeathCubeK"
*/

// write the function isAnagram
var isAnagram = function(test, original) {
  const sanitizeString = function (str) {
    return str.toLowerCase().split('').sort().join('');
  }
  return sanitizeString(test) == sanitizeString(original)
};