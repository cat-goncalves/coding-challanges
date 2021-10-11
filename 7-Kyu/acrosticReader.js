/*
https://www.codewars.com/kata/59b843b58bcb7766660000f6/solutions/javascript

An acrostic is a text in which the first letter of each line spells out a word. It is also a quick and cheap way of writing a poem for somebody, as exemplified below :
*/

function readOut(acrostic) {
  let arr = acrostic.map(word => word.charAt())
  return arr.join('')
}

/*
Alternate Solutions
function readOut(acrostic) {
 return acrostic.map((name) => name[0]).join("");
}



*/
