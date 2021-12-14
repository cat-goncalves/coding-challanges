/*
https://www.codewars.com/kata/5b39e91ee7a2c103300018b3/solutions/javascript

Description:
Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

"alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

--> "alpha beta gamma delta alpha beta gamma delta"
*/

const removeConsecutiveDuplicates = s => s.split(" ").filter((x,i,arr) => x!=arr[i-1]).join(" ");


//from Standup:
function removeDuplicateWord (str) {
  //str --> filter word is not the next word -> join
  return str.split(' ').filter((w, i, a) => w != a[i + 1]).join(' ')
}

// .filter()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter