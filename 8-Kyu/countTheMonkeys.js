/*
https://www.codewars.com/kata/56f69d9f9400f508fb000ba7/solutions/javascript

You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1.

As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.

For example:

monkeyCount(10) // --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
monkeyCount(1) // --> [1]
*/

function monkeyCount(n) {
  let monkeyCounter = []
  for (let i = 1; i <= n; i++){
    monkeyCounter.push(i)
  }
  return monkeyCounter
}

/*
the iterator is adding to the monkeyCounter array for every number between 1-n, starting from 1 because we are not including zero

we are returning the monkeyCounter array outside of the for loop because we want to return the array once all of the numbers between 1 and n have been added
*/