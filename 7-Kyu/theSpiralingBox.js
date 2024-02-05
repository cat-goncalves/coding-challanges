/**
 * https://www.codewars.com/kata/63b84f54693cb10065687ae5
 * 
 * DESCRIPTION:
Task
Given two positive integers m (width) and n (height), fill a two-dimensional list (or array) of size m-by-n in the following way:

(1) All the elements in the first and last row and column are 1.

(2) All the elements in the second and second-last row and column are 2, excluding the elements from step 1.

(3) All the elements in the third and third-last row and column are 3, excluding the elements from the previous steps.

And so on ...

Examples
Given m = 5, n = 8, your function should return

[[1, 1, 1, 1, 1],
 [1, 2, 2, 2, 1],
 [1, 2, 3, 2, 1],
 [1, 2, 3, 2, 1],
 [1, 2, 3, 2, 1], 
 [1, 2, 3, 2, 1],
 [1, 2, 2, 2, 1],
 [1, 1, 1, 1, 1]]
Given m = 10, n = 9, your function should return

[[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
 [1, 2, 2, 2, 2, 2, 2, 2, 2, 1],
 [1, 2, 3, 3, 3, 3, 3, 3, 2, 1], 
 [1, 2, 3, 4, 4, 4, 4, 3, 2, 1], 
 [1, 2, 3, 4, 5, 5, 4, 3, 2, 1], 
 [1, 2, 3, 4, 4, 4, 4, 3, 2, 1], 
 [1, 2, 3, 3, 3, 3, 3, 3, 2, 1], 
 [1, 2, 2, 2, 2, 2, 2, 2, 2, 1], 
 [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]]
Bird mountain generalizes this kata in a fun way.
 */

// **************************************
// PSEUDOCODE
// **************************************

/**
 * Given: two positive integers: width, height
 *  - width describes the total number of elements that every inner array has
 *  - height describes how many elements(arrays) are inside the outer array
 * 
 * What populates the arrays:
 *  - width: # or elements
 * 
 * Should I work on the outer arrays or the inner arrays first?
 * What patterns do I notice that could potentially help me translate the instructions to code?
 *  - I know that there is a relationship between height, weight and trhe indexes odf both the outer and inner arrays
 */
