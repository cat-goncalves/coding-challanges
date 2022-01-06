/*
https://www.codewars.com/kata/545cedaa9943f7fe7b000048/train/javascript

A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
*/

function isPangram(string){
  const arr = string.toLowerCase().split('')
  let charMap = {}
  arr.forEach(char => {
    if(!charMap.hasOwnProperty(char) && 
       char.charCodeAt(0) !== char.toUpperCase().charCodeAt(0)){
      charMap[char] = 1
    }
  })
  return Object.keys(charMap).length === 26
}

function isPangram(string){
  string = string.toLowerCase()
  return "abcdefghijklmnopqrstuvwxyz".split('').every(x => string.indexOf(x) !== -1)
}