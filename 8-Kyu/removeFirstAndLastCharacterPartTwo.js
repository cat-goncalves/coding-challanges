/*
https://www.codewars.com/kata/570597e258b58f6edc00230d/train/javascript

Description:

You are given a string containing a sequence of character sequences separated by commas.

Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.

If the input string is empty or the removal of the first and last items would cause the resulting string to be empty, return an empty value (represented as a generic value NULL in the examples below).

Examples
"1,2,3"      =>  "2"
"1,2,3,4"    =>  "2 3"
"1,2,3,4,5"  =>  "2 3 4"

""     =>  NULL
"1"    =>  NULL
"1,2"  =>  NULL
*/

function array(arr){
  let array = arr.split(",")
  console.log(array.length)
  if (array.length < 3) {
    return null
  } else{
    array.pop()
    array.shift()
    return array.join(' ')
  }
}

//Top Solution:

function array(arr){
  return arr.split(",").slice(1,-1).join(" ") || null;
}

// Slice Method:
// slice(start index, end index) – creates a new array, copies elements from index start till end (not inclusive) into it.

//Question:
// How does it know when to output null?