// https://www.codewars.com/kata/55a2d7ebe362935a210000b2
// Given an array of integers your solution should find the smallest integer.

// For example:

// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.

class SmallestIntegerFinder {
  findSmallestInt(args) {
    args.sort((a, b) => {
      if (a < b) return -1
      if (a > b) return 1
      return 0
    })
    return args[0]
  }
}

// Most popular answer using the Spread Operator
// class SmallestIntegerFinder {
//   findSmallestInt(args) {
//     return Math.min(...args)
//   }
// }