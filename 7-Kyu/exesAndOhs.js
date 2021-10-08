/*
https://www.codewars.com/kata/55908aad6620c066bc00002a/solutions/javascript

Description:
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false


*/

function XO(str) {
  let xCount = 0
  let oCount = 0
  const strLowerCase = str.toLowerCase()
  for (let i = 0; i < str.length; i++) {
    if (strLowerCase.charAt(i) === 'x') {
      xCount += 1
    }
    if (strLowerCase.charAt(i) === 'o') {
      oCount += 1
    }
  } 
    if (xCount === oCount){
      return true
    } else {return false}
}


/*
Most popular answer:
function XO(str) {
  let x = str.match(/x/gi);
  let o = str.match(/o/gi);
  return (x && x.length) === (o && o.length);
}

const XO = str => {
  str = str.toLowerCase().split('');
  return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
}

function XO(str) {
    return str.toLowerCase().split('x').length === str.toLowerCase().split('o').length;
}
*/