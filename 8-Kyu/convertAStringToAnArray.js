/*
https://www.codewars.com/kata/57e76bc428d6fbc2d500036d/solutions/javascript

Description:
Write a function to split a string and convert it into an array of words. For example:

"Robin Singh" ==> ["Robin", "Singh"]

"I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]
*/

function stringToArray(string){
  return string.split(' ');
}