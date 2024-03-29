/**
 * https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/javascript
 * 
 * Duplicate Encoder
 * 
  The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

  Examples

  "din"      =>  "((("
  "recede"   =>  "()()()"
  "Success"  =>  ")())())"
  "(( @"     =>  "))((" 
 */

function duplicateEncode(word){
  let strArr = word.toLowerCase().split('')
  let result = ''

  for (let char in strArr) {
    if (strArr.indexOf(strArr[char]) === strArr.lastIndexOf(strArr[char])) {
      result += "("
    } else {
      result += ")"
    }
  }
return result
}

// Alternative Solutions:
function duplicateEncode(word){
  return word
    .toLowerCase()
    .split('')
    .map( function (a, i, w) {
      return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
    })
    .join('');
}
