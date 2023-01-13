/*
https://www.codewars.com/kata/577a98a6ae28071780000989

Your task is to make two functions, max and min (maximum and minimum in PHP and Python, maxi and mini in Julia) that take a(n) array/vector of integers list as input and outputs, respectively, the largest and lowest number in that array/vector.

#Examples

max([4,6,2,1,9,63,-134,566]) returns 566
min([-52, 56, 30, 29, -54, 0, -110]) returns -110
max([5]) returns 5
min([42, 54, 65, 87, 0]) returns 0
#Notes

You may consider that there will not be any empty arrays/vectors.
*/

var min = function(list){
  list.sort((a,b) => a - b)
    return list[0];
}

var max = function(list){
  list.sort((a,b) => b - a)
    return list[0];
}

/*
Alternate Solutions:
const min = (list) => Math.min(...list);
const max = (list) => Math.max(...list);

More on The Spread Operator: 
https://www.geeksforgeeks.org/javascript-spread-operator/
https://www.javascripttutorial.net/es6/javascript-spread/
https://www.codingame.com/playgrounds/7998/es6-tutorials-spread-operator-with-fun
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax

*/