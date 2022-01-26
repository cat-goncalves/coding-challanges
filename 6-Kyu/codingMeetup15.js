/*
https://www.codewars.com/kata/583a8bde28019d615a000035/train/javascript

You will be given an array of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.

Given the following input array:

var list1 = [
  { firstName: 'Aba', lastName: 'N.', country: 'Ghana', continent: 'Africa', age: 21, language: 'Python' },
  { firstName: 'Abb', lastName: 'O.', country: 'Israel', continent: 'Asia', age: 39, language: 'Java' }
];
write a function that when executed as findOddNames(list1) returns only the developers where if you add the ASCII representation of all characters in their first names, the result will be an odd number:

[
  { firstName: 'Abb', lastName: 'O.', country: 'Israel', continent: 'Asia', age: 39, language: 'Java' }
]
Explanation of the above:

Sum of ASCII codes of letters in 'Aba' is: 65 + 98 + 97 = 260 which is an even number
Sum of ASCII codes of letters in 'Abb' is: 65 + 98 + 98 = 261 which is an odd number
Notes:

Preserve the order of the original list.
Return an empty array [] if there is no developer with an "odd" name.
The input array and first names will always be valid and formatted as in the example above.
*/

function findOddNames(list) {
  let result = []
  let names = list.map(dev => dev.firstName.split(''))
  list.forEach(dev => {
    let codeSum = 0
    for(let i = 0; i < dev.firstName.length; i++){
      codeSum += dev.firstName.charCodeAt(i)
    }
    if(codeSum % 2 !== 0){
      result.push(dev)
    }
  })
  return result
}

//Alternate Solution
function findOddNames(list) {
  return list.filter(dev => dev.firstName.split('').map(x => x.charCodeAt(0)).reduce((a,c) => a + c) % 2 !== 0)
}