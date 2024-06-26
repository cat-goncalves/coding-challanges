var lengthOfSequence = function (arr, n) {
  let subArray = arr.slice(arr.indexOf(n), arr.lastIndexOf(n) + 1)
  console.log(arr.filter((x) => x === n))

  if(arr.length === 2){
    return 2
  } else 
    if(arr.indexOf(n) === -1 || arr.length === 1 || arr.filter((x) => x === n).length > 2){
    return 0
  }  else {
    return subArray.length
  }
};

/**

  P-arameters
    given: array of ints, # that exists in the subarray
    always going to be positive or negative numbers
    will there ever be only 1 occurrance of a given #?

  R-eturn
    length(number) of the subarray that begins AND ends eith with the given #
    if 0 occurrances of the # or more than two ,return 0

  E-xamples
    [1, 1], 1), 2
    [1, 2, 3, 1], 1), 4
    [-7, 5, 0, 2, 9, 5], 5), 5
    [-7, 6, 2, -7, 4], -7), 4
    
  P-seudocode
    - first check if there are 0 or > 2 occurrances of the # and immeditely return 0
    - If pass this check, use indexOf and lastIndexOf to find the indexes of the subarray
    - If indexOf and lastIndexOf are the same, this would indicate that there is only 1 of the given #
      confirming if this check is needed
    - array method to make a shallow copy of the subarray (slice, splice etc...)
    - using .length to find length of subarray? / we could also subtract the indexes from one another

*/