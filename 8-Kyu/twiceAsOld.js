// https://www.codewars.com/kata/5b853229cfde412a470000d0/solutions/javascript

// Your function takes two arguments:

// current father's age (years)
// current age of his son (years)
// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).

function twiceAsOld(dadYearsOld, sonYearsOld) {
  return (sonYearsOld * 2 <= dadYearsOld ? dadYearsOld - sonYearsOld * 2 : sonYearsOld * 2 - dadYearsOld)
}

// Most Popular Answer
// function twiceAsOld(dadYearsOld, sonYearsOld) {
//   return Math.abs(dadYearsOld - 2 * sonYearsOld);
// }

// Math.abs() returns the absolute value of the Number, so it operates it solves for the case where double the sons age is either less than or greater than the fathers age irrespective 

// Math.abs('-1');     // 1
// Math.abs(-2);       // 2
// Math.abs(null);     // 0
// Math.abs('');       // 0
// Math.abs([]);       // 0
// Math.abs([2]);      // 2
// Math.abs([1,2]);    // NaN
// Math.abs({});       // NaN
// Math.abs('string'); // NaN
// Math.abs();         // NaN

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/abs