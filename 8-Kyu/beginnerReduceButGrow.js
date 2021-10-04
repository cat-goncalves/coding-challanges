/*
https://www.codewars.com/kata/57f780909f7e8e3183000078/solutions/javascript

Given a non-empty array of integers, return the result of multiplying the values together in order. Example:
*/

function grow(x){
  return x.reduce((a,c) => a * c)
}