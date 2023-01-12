/*
https://www.codewars.com/kata/57eae65a4321032ce000002d/solutions/javascript

Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

*/

function fakeBin(x){
  let newString = ''
  for (let i = 0; i < x.length; i++)
    if (x[i] < 5){
      newString += 0
    } else {newString += 1}
  return newString
}

/*
Alternate Solutions:

function fakeBin(x) {
    return x.split('').map(n => n < 5 ? 0 : 1).join('');
}

^ Regular Expressions: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

function fakeBin(x) {
  return x.replace(/\d/g, d => d < 5 ? 0 : 1);
}

*/