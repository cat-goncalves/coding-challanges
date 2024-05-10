/**
 * Moving Zeros To The End
 * https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/javascript
 * 
 * Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
 */

function moveZeros(arr) {
  let filteredArr = arr.filter(x => x !== 0)
  let zeroArr = arr.filter(y => y === 0)
  return filteredArr.concat(zeroArr);
}

function moveZeros(arr) {
  return arr.sort((a, b) => b === 0 ? -1 : 0);
}

/**
  P-arameters

  R-eturn

  E-xamples

  P-seudocode
    Filter out Zeros
    Count Zeros
    Concatenate
*/