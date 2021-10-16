/*
https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/solutions/javascript

Description:
This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.
*/

function accum(s) {
  let mumble = []
  let arr = s.split('')
  for (let i = 0; i < arr.length; i++){
    mumble.push(arr[i].toUpperCase() + arr[i].toLowerCase().repeat(i))
  }
  return mumble.join('-')
}