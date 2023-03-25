/*
https://www.codewars.com/kata/5601409514fc93442500010b/train/javascript

*/

function betterThanAverage(classPoints, yourPoints) {
  return classPoints.reduce((a,b) => a + b) / classPoints.length < yourPoints ? true : false
 }
 

//This alternative does not use a ternary operator
//  function betterThanAverage(classPoints, yourPoints) {
//   return yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length; 
// }