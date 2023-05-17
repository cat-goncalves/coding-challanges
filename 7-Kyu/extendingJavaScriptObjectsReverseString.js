/*
https://www.codewars.com/kata/581270cb4927602fc800005a/train/javascript

Unfortunately, there's no a .reverse() method for the JavaScript String object.

Your task is to extend JavaScript String object, so you can reverse strings just like this:

'Hello, World!'.reverse();
The method should return:

'!dlroW ,olleH'
*/

String.prototype.reverse = function() {
  return [...this].reduce((a,c) => c + a, '')
}

//Alternate Solutions:
String.prototype.reverse = function() {
  return [...this].reverse().join("")
};

String.prototype.reverse = function() {
  var newString = "";
  for (var i = this.length - 1; i >= 0; i--) {
      newString += this[i];
  }
  return newString;
}