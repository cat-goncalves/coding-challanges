//https://leetcode.com/problems/fizz-buzz

var fizzBuzz = function(n) {
  let answer = []
  for (let i = 0; i <= n ; i++){
      if (i % 3 === 0 && i % 5 === 0) {
          answer[i] = 'FizzBuzz'
      } else if (i % 3 === 0) {
          answer[i] = 'Fizz'
      } else if (i % 5 === 0) {
          answer[i] = 'Buzz'
      } else {
          answer[i] = i.toString()
      }
  }
      answer.shift()
      return answer
};