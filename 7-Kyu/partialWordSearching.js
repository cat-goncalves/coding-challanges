/* Write a method that will search an array of strings for all strings that contain another string, ignoring capitalization. Then return an array of the found strings.

The method takes two parameters, the query string and the array of strings to search, and returns an array.

If the string isn't contained in any of the strings in the array, the method returns an array containing a single string: "Empty" (or Nothing in Haskell, or "None" in Python and C)

Examples

If the string to search for is "me", and the array to search is ["home", "milk", "Mercury", "fish"], the method should return ["home", "Mercury"].
*/
// First Pass
function wordSearch(query, seq){
  let returnArr = []
  seq.forEach(elem => {
     if(elem.toLowerCase().includes(query.toLowerCase())) {
       returnArr.push(elem)
     }
  })
  if(returnArr.length == 0) returnArr.push("Empty")
  
  return returnArr
}

// Refactor
function wordSearch(query, seq){
  let subArray = seq.filter((x) => x.toLowerCase().includes(query.toLowerCase()))
  return subArray.length > 0 ? subArray : ["Empty"]
}
  /**

  P-arameters
    Given: substring, array of strings

  R-eturn
    subArray of all the strings containing the substring
    or array with string "Empty" ir none matchign subtring

  E-xamples
    "ab", ["za", "ab", "abc", "zab", "zbc"]), ["ab", "abc", "zab"]
    "aB", ["za", "ab", "abc", "zab", "zbc"]), ["ab", "abc", "zab"]
    "me"
    
  P-seudocode
    - uniform case between sunstring and each element in the array
    - I know that includes is a string method that can check for a given substring
    - I know that I either need to do a comparison check and push to a new array or filter and return the subarray
    - condition for the use case where no strings match the given substring

*/