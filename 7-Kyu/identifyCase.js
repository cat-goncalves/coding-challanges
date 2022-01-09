/*
https://www.codewars.com/kata/5819a6fdc929bae4f5000a33/train/javascript

We’ve all seen katas that ask for conversion from snake-case to camel-case, from camel-case to snake-case, or from camel-case to kebab-case — the possibilities are endless.

But if we don’t know the case our inputs are in, these are not very helpful.

Task:
So the task here is to implement a function (called id in Ruby/Crystal/JavaScript/CoffeeScript and case_id in Python/C) that takes a string, c_str, and returns a string with the case the input is in. The possible case types are “kebab”, “camel”, and ”snake”. If none of the cases match with the input, or if there are no 'spaces' in the input (for example in snake case, spaces would be '_'s), return “none”. Inputs will only have letters (no numbers or special characters).

Some definitions
Kebab case: lowercase-words-separated-by-hyphens

Camel case: lowercaseFirstWordFollowedByCapitalizedWords

Snake case: lowercase_words_separated_by_underscores

Examples:
id(“hello-world”) #=> “kebab”
id(“hello-to-the-world”) #=> “kebab”
id(“helloWorld”) #=> “camel”
id(“helloToTheWorld”) #=> “camel”
id(“hello_world”) #=> “snake”
id(“hello_to_the_world”) #=> “snake”
id(“hello__world”) #=> “none”
id(“hello_World”) #=> “none”
id(“helloworld”) #=> “none”
id(“hello-World”) #=> “none”
*/

function id(c_str) {
  if(c_str.includes('-') && 
      !c_str.includes('_') && 
      c_str.split('').every(x => x === x.toLowerCase()) && 
      !c_str.includes('__') && 
      !c_str.includes('--')){
    return 'kebab'
  } else if(c_str.includes('_') && 
          !c_str.includes('-') && 
          c_str.split().every(x => x === x.toLowerCase() && 
          !c_str.includes('__'))){
    return 'snake'
  } else if(c_str.split('').some(x => x === x.toUpperCase() &&
          !c_str.includes('_') &&
          !c_str.includes('-') &&
          !c_str.includes('__'))){
    return 'camel'
  } else {
    return 'none'
  }
}