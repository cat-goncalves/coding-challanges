/*
codewars.com/kata/53a20af2e0afd3e2cd000333/solutions/javascript

Description:
Write the definition of the function "say" such that calling this:

say("Hello")("World")
returns "Hello World"
*/


var say = function(string1) {
  return function(string2){return `${string1} ${string2}`}
}

/*
Alternative Solutions:
const say = string1 => string2 => `${string1} ${string2}`;
*/