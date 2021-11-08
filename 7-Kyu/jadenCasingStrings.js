/*
https://www.codewars.com/kata/5390bac347d09b7da40006f6

Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

Example:

Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"
*/

String.prototype.toJadenCase = function () {
  let wordsArray = this.toLowerCase().split(' ')
  let capsArray = []
  wordsArray.forEach(word =>  capsArray.push(word[0].toUpperCase() + word.slice(1)))
  return capsArray.join(' ')
};

String.prototype.toJadenCase = function () {
  return this.split(' ').map( word => word[0].toUpperCase() + word.slice(1)).join(' ')
};

/*
Why it works:
creates a function where this refers to the input
split the string into an array of each word
map itirates through and transforms the first character of each element (word[0]) and makes it upper case
because map outputs a new array based on the operation we need to concatenate word[0].toUpperCase to the rest of the word
We do this by using word.slice, which returns a copied portion ar an array. it takes in (start index, finish index), but will return the start index to the end of an array if the array is not defined
We join to being the array back together as a string
*/


/*
THIS Keyword Resources:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this

https://www.w3schools.com/js/js_this.asp
*/