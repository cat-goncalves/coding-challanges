/*
https://www.codewars.com/kata/58670300f04e7449290000e5/train/javascript

Description:
Complete the function that takes one argument, a list of words, and returns the length of the longest word in the list.

For example:

['simple', 'is', 'better', 'than', 'complex'] ==> 7
Do not modify the input list.
*/

function longest(words) {
  let longestWord = 0
  for (let i = 0; i < words.length; i++){
    if(words[i].length > longestWord){
      longestWord = words[i].length
    }
  }
  return longestWord
}