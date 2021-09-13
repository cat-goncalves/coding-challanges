// https://www.codewars.com/kata/57a2013acf1fa5bfc4000921

function find_average(array) {
  if (array.length === 0){
    return 0
  } else {
    return array.reduce((a, c) => a + c, 0) / array.length
  }
}

//  When the string is empty, the average returns NaN, when it is expecting zero, so the the conditional logic here is checking that the string is not empty before performing the calculation