/**
 * If You Can't Sleep, Just Count Sheep
 * https://www.codewars.com/kata/5b077ebdaf15be5c7f000077/train/javascript
 * 
 * If you can't sleep, just count sheep!!

Task:

Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.
 */

// Standard Solution
var countSheep = function (num){
  let str = ''
  for(let x = 1; x <= num; x++) {
    str = str + `${x} sheep...`
  }
  return str
}

// Recursive Solution
function countSheep(num, str = ''){
  if(num == 0) {
    return str
  } else {
    str = `${num} sheep...` + str
    return countSheep(num -1, str)
  }
}