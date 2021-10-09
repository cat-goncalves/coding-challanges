/*
https://www.codewars.com/kata/55955a48a4e9c1a77500005a/solutions/javascript

Description:
Say hello!

Write a function to greet a person. Function will take name as input and greet the person by saying hello. Return null/nil/None if input is empty string or null/nil/None.

Example:

greet("Niks") === "hello Niks!";
greet("") === null; // Return null if input is empty string
greet(null) === null; // Return null if input is null
*/

function greet(name) {
  if (name === ''){
    return null
  } else if (name === null){
    return null
  } else {
    return `hello ${name}!`
  }
}

/*
Alternative Solutions
function greet(name) {
  return name ? 'hello ' + name + '!' : null;
}

function greet(name) {
  return name ? `hello ${name}!` : null;
}
*/