/*
https://www.codewars.com/kata/55a2d7ebe362935a210000b2/train/javascript


Given an array of integers your solution should find the smallest integer.

For example:

Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
You can assume, for the purpose of this kata, that the supplied array will not be empty.
*/

class SmallestIntegerFinder {
  findSmallestInt(args) {
    let orderedList = args.sort((a,b) => a - b)
    return orderedList[0]
  }
}
//Parameter: an array of integers
    // - will they ever not be integers? Would it ever not be a number
    // - will there ever be duplicate numbers?
    // - will the array ever be empty
//Return: smallest integer
//Example: [34, 15, 88, 2] => 2 || [34, -345, -1, 100] => -345
//Pseudocode: sort the array smallest to largest and return the zero indez
          // assign a viarable to the zero index, compare to every char w/ loop and return the variable