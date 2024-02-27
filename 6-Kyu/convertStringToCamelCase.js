/**
 * https://www.codewars.com/kata/517abf86da9663f1d2000003/train/javascript
 * 
 * Convert String to Camel Case
 * 
  Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

  Examples

  "the-stealth-warrior" gets converted to "theStealthWarrior"

  "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

  "The_Stealth-Warrior" gets converted to "TheStealthWarrior"
 */

  // For Loop Solution
  function toCamelCase(str){
    let arr = str.split("")
    
    for(let x = 0; x < arr.length; x++) {
      if(arr[x] === "-" || arr[x] === "_") {
        arr[x + 1] = arr[x + 1].toUpperCase()
        arr[x] = ""
      }
    }
    return arr.join("")
  }

  // Regex Solution
function toCamelCase(str){
  let newStr = str.replace(/[-_]/g, " ")
    
  if(str.length === 0) {
    return str
  } else {
      let arr = newStr.split(' ')
      for(let x = 1; x < arr.length; x++) {
        arr[x] = arr[x][0].toUpperCase() + arr[x].substr(1)
      }
      return arr.join("")
    }
}

  // Regex Solution Simplified
function toCamelCase(str){
  let regExp=/[-_]\w/ig;
  return str.replace(regExp,function(match){
        return match.charAt(1).toUpperCase();
    });
}

function toCamelCase(str){
  return str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());
}

/**

  P-arameters
    string that contains either "-", "_", or both

  R-eturn
    string with every "-" and "_" replaced and converted to camel case

  E-xamples
    "the-stealth-warrior" gets converted to "theStealthWarrior"
    "The_Stealth_Warrior" gets converted to "TheStealthWarrior"
    "The_Stealth-Warrior" gets converted to "TheStealthWarrior"

  P-seudocode
    convert "-" and "_" to a blank space (uniformity), split the string by the space
    left with an array of words -> make the first element in every array uppercase
    join the array and return

*/