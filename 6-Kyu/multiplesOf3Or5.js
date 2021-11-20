/*
https://www.codewars.com/kata/514b92a657cdc65150000006/solutions/javascript

Description:
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

Note: If the number is a multiple of both 3 and 5, only count it once.
*/

function solution(number){
  let arrOfNums = []
  for(let i = 3; i < number; i++){
    if (i % 3 === 0 || i % 5 === 0){
      arrOfNums.push(i)
    }
  }
  return arrOfNums.length === 0 ? 0 : arrOfNums.reduce((a,c) => a + c)
}

//Improved Solution:
function solution(number){
  let arrOfNums = []
  for(let i = 3; i < number; i++){
    if( i % 3 === 0 || i % 5 === 0){
      arrOfNums.push(i)
    }
  }
  return arrOfNums.reduce((a,c) => a + c, 0)
}

//initializing the accumulator as 0 solves for 


//Alternative Solution
function solution(number){
  var sum = 0;
  
  for(var i = 1;i< number; i++){
    if(i % 3 == 0 || i % 5 == 0){
      sum += i
    }
  }
  return sum;
}