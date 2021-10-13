/*
https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/solutions/javascript

Description:
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.

*/

function findShort(s){
  let arr = s.split(' ')
  arr.sort(function(a, b){return a.length-b.length})
  return arr[0].length
}


/*
Alternative Solutions:
function findShort(s){
  return Math.min.apply(null, s.split(' ').map(w => w.length));
}

function findShort(s){
    return Math.min(...s.split(" ").map (s => s.length));
}

const findShort = (s) => s
  .split(' ')
  .sort((a, b) => b.length - a.length)
  .pop()
  .length;

*/