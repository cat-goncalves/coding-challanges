/*
https://www.codewars.com/kata/5b180e9fedaa564a7000009a/solutions/javascript

Description:
In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

make as few changes as possible.
if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
For example:

solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
solve("coDE") = "code". Upper == lowercase. Change all to lowercase.
*/

function solve(s){
  let lower = 0
  let upper = 0
  for (let i = 0; i < s.length; i++){
    if (s[i] === s[i].toUpperCase()){
      upper++
    } else {
      lower ++
    }
  }
  return upper > lower ? s.toUpperCase() : s.toLowerCase()
}

/*
Notes:
- test whether each character is an upper or lower case letter
- determine how many uppercase and lowercase characters their are
- output a lowercase or uppercase string if the condition is met. 
In this case: output uppercase if # uppercase characters > # lowerase characters
*/