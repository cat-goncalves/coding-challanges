/*
https://www.codewars.com/kata/58291fea7ff3f640980000f9/train/javascript

You will be given a sequence of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.

Your task is to return:

true if all of the following continents / geographic zones will be represented by at least one developer: 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'.
false otherwise.
For example, given the following input array:

var list1 = [
  { firstName: 'Fatima', lastName: 'A.', country: 'Algeria', continent: 'Africa', age: 25, language: 'JavaScript' },
  { firstName: 'Agustín', lastName: 'M.', country: 'Chile', continent: 'Americas', age: 37, language: 'C' },
  { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 39, language: 'Ruby' },
  { firstName: 'Laia', lastName: 'P.', country: 'Andorra', continent: 'Europe', age: 55, language: 'Ruby' },
  { firstName: 'Oliver', lastName: 'Q.', country: 'Australia', continent: 'Oceania', age: 65, language: 'PHP' },
];
your function should return true as there is at least one developer from the required 5 geographic zones.

Notes:

The input array and continent names will always be valid and formatted as in the list above for example 'Africa' will always start with upper-case 'A'.
*/

function allContinents(list) {
  let result = []
  list.forEach(dev => {
    if(!result.includes(dev.continent)){
      result.push(dev.continent)
    }
  })
  return result.length === 5 ? true : false
}

//instantiate comparison array. Could also be used directly
//Array.every() only returns true if every element meets the test condition
//the test condition is the list Obj.some(), which outputs true if at least 1 of the elements meet the test condition
// the test condition is strict comparison between the continent property and the allContinents elements
//so we're returhing true is every allContinents meets truthy => Truthy is if some of the list objects contain the allContinents we're iterating over
function allContinents(list) {
  let allContinents = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']
  return allContinents.every(elem => list.some(listElem => elem === listElem.continent))
}