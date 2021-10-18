/*
https://www.codewars.com/kata/56f699cd9400f5b7d8000b55/solutions/javascript

Description:
You're at the zoo... all the meerkats look weird. Something has gone terribly wrong - someone has gone and switched their heads and tails around!

Save the animals by switching them back. You will be given an array which will have three values (tail, body, head). It is your job to re-arrange the array so that the animal is the right way round (head, body, tail).

Same goes for all the other arrays/lists that you will get in the tests: you have to change the element positions with the same exact logics

Simples!
*/

function fixTheMeerkat(arr) {
  return arr.reverse()
}

/*
My original solution essentially worked out what the reverse is doing here.

function fixTheMeerkar(arr){
  let output = []
  for (let i = 0; i <arr.length; i++){
    output.unshift[i]
  }
  return output
}


Other Alternate Solutions

const fixTheMeerkat = ([tail, body, head]) => [head, body, tail]

function fixTheMeerkat(arr) {
  return [arr[2], arr[1], arr[0]];
}
*/