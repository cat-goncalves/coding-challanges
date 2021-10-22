/*
https://www.codewars.com/kata/55f2b110f61eb01779000053/solutions/javascript

Description:
Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!

Examples (a, b) --> output (explanation)
(1, 0) --> 1 (1 + 0 = 1)
(1, 2) --> 3 (1 + 2 = 3)
(0, 1) --> 1 (0 + 1 = 1)
(1, 1) --> 1 (1 since both are same)
(-1, 0) --> -1 (-1 + 0 = -1)
(-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
*/

function getSum( a,b ){
  console.log(a,b)
  let arr = []
  let high = Math.max(a,b)
  let low = Math.min(a,b)
  for (let i = low; i <= high; i++){
    arr.push(i)
  }
  console.log(arr.reduce((x, y) => x + y))
  return arr.reduce((x, y) => x + y)
}


/*
Alternative Solutions

const GetSum = (a, b) => {
  let min = Math.min(a, b),
      max = Math.max(a, b);
  return (max - min + 1) * (min + max) / 2;
}

function GetSum(a,b){
  return (Math.abs(a - b) + 1) * (a+b) / 2;
}
*/