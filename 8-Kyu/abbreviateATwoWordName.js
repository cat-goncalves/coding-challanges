/*
https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/solutions/javascript
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F
*/

function abbrevName(name){
  let initialName = name.split(' ')
  return initialName[0].charAt(0).toUpperCase() + '.' + initialName[1].charAt(0).toUpperCase()

}

/*
split the string along the space
a new string is created that now holds each name as its own element
looking at the string in the zero position and the character in the zero position for first letter of the first name, then the element in the 1 position and the character in the zero position for the first letter of the second (last) name.

concatenate with '.'
*/