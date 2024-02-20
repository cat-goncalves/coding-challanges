/**
 * https://www.codewars.com/kata/5abd66a5ccfd1130b30000a9/train/javascript
 * 
 * Row Weights
 * 
 * Scenario

    Several people are standing in a row divided into two teams.
    The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.

    Task

    Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.

    Notes

    Array size is at least 1.
    All numbers will be positive.
    Input >> Output Examples

    rowWeights([13, 27, 49])  ==>  return (62, 27)
    Explanation:

    The first element 62 is the total weight of team 1, and the second element 27 is the total weight of team 2.
 */

function rowWeights(array){
  return [array.filter((x,i) => i % 2 === 0).reduce((a,c) => a + c, 0), array.filter((x,i) => i % 2 !== 0).reduce((a,c) => a + c, 0)]
}

function rowWeights(array){
  let t1 = array.filter((x, i)=>i%2==0).reduce((a,item)=>a+item,0);
  let t2 = array.filter((x, i)=>i%2!=0).reduce((a,item)=>a+item,0);
  
  return [t1, t2]
}

/**

  P-arameters
    array of positive integers (the weights of people)
    all even indexes would be on team 1, ann odd indexes are on team 2
    size >= 1

  R-eturn
  a new array of two integers
  - first integer is the total weight of team 1
  - second integer is the total weight of team 2

  E-xamples
    rowWeights([13, 27, 49])  ==>  return (62, 27)
    rowWeights([80])  ==>  return (80, 0)

  P-seudocode
    filter by whether the index is an even or an odd number and then reduce

*/