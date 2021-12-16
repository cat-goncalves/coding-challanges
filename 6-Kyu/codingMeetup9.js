/*
https://www.codewars.com/kata/5829ca646d02cd1a65000284/train/javascript

You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.

Your task is to return:

true if developers from all of the following age groups have signed up: teens, twenties, thirties, forties, fifties, sixties, seventies, eighties, nineties, centenarian (at least 100 years young).
false otherwise.
For example, given the following input array:

var list1 = [
  { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 19, language: 'Python' },
  { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 29, language: 'JavaScript' },
  { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 39, language: 'Ruby' },
  { firstName: 'Noa', lastName: 'A.', country: 'Israel', continent: 'Asia', age: 40, language: 'Ruby' },
  { firstName: 'Andrei', lastName: 'E.', country: 'Romania', continent: 'Europe', age: 59, language: 'C' },
  { firstName: 'Maria', lastName: 'S.', country: 'Peru', continent: 'Americas', age: 60, language: 'C' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 75, language: 'Python' },
  { firstName: 'Chloe', lastName: 'K.', country: 'Guernsey', continent: 'Europe', age: 88, language: 'Ruby' },
  { firstName: 'Viktoria', lastName: 'W.', country: 'Bulgaria', continent: 'Europe', age: 98, language: 'PHP' },
  { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'JavaScript' }
];
your function should return true as there is at least one developer from each age group.

Notes:

The input array will always be valid and formatted as in the example above.
Age is represented by a number which can be any positive integer up to 199.
*/

function isAgeDiverse(list) {
  let ages = [false, false, false, false, false, false, false, false, false, false]
  list.map(dev => {
    const age = dev.age
    if(9 < age && age < 20){ages[0] = true}
    if(19 < age && age< 30){ages[1] = true}
    if(29 < age && age< 40){ages[2] = true}
    if(39 < age && age< 50){ages[3] = true}
    if(49 < age && age< 60){ages[4] = true}
    if(59 < age && age< 70){ages[5] = true}
    if(69 < age && age< 80){ages[6] = true}
    if(79 < age && age< 90){ages[7] = true}
    if(89 < age && age< 100){ages[8] = true}
    if(99 < age ){ages[9] = true}
  })
  console.log(ages)
  return ages.every(elem => elem === true )
}


//refactored solution
function isAgeDiverse(list) {
  let ranges =  [ [10,20]
  , [20,30]
  , [30,40]
  , [40,50]
  , [50,60]
  , [60,70]
  , [70,80]
  , [80,90]
  , [90,100]
  , [100,200] 
  ]
  return ranges.every(([minAge, maxAge]) => list.some(dev => minAge <= dev.age && dev.age < maxAge))
}