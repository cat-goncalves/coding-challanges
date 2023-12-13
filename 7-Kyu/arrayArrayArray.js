/**
 * https://www.codewars.com/kata/57eb936de1051801d500008a/train/javascript
 * 
 * You are given an initial 2-value array (x). You will use this to calculate a score.

If both values in (x) are numbers, the score is the sum of the two. If only one is a number, the score is that number. If neither is a number, return 'Void!'.

Once you have your score, you must return an array of arrays. Each sub array will be the same as (x) and the number of sub arrays should be equal to the score.

For example:

if (x) == ['a', 3] you should return [['a', 3], ['a', 3], ['a', 3]].
 */

function explode(x){
  let score = 0
  let answer = []
  
  if (x.every((y) => y % 1 === 0)) {
    score = x[0] + x[1]
    for (let j = 0 ; j < score ; j++) {
      answer.push(x)
    }
    return answer
  } else if ( x.every((y) => typeof(y) !== "number")) {
    return "Void!"
  } else {
    score = typeof(x[0]) === 'number' ? x[0] : x[1]
    for (let j = 0 ; j < score ; j++) {
      answer.push(x)
    }
    return answer
  }
}

//  Refactored

function explode(x){
  let answer = [];

  if(x.every((element) => element % 1 !== 0)) {
    return "Void!"
  } else {
    const score = x.filter((y) => typeof(y) === 'number').reduce((a,b) => a + b)
    for (let j = 0; j < score; j++) {
      answer.push(x)
    }
    return answer;
  }
}

//  Alternate soolution
function explode(x){
  let [a,b] = x;
  
  if(typeof a == "number" && typeof b == "number") return new Array(a+b).fill(x);
  else if(typeof a == "number") return new Array(a).fill(x);
  else if(typeof b == "number") return new Array(b).fill(x);
  
  return 'Void!';
}