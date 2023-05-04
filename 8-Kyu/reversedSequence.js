/*
https://www.codewars.com/kata/5a00e05cc374cb34d100000d/solutions/javascript

Description:
Build a function that returns an array of integers from n to 1 where n>0.

Example : n=5 --> [5,4,3,2,1]
*/

const reverseSeq = n => {
  let output = []
  for (let i = 1; i <= n; i++){
    output.unshift(i)
  }
  return output;
};

/*
Alternate Solutions

const reverseSeq = n => {
  return Array(n).fill(0).map((e, i) => n - i );
};

const reverseSeq = length => Array.from({length}, () => length--)
*/