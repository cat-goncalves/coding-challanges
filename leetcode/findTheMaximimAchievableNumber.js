/**
 * Find the Maximum Achievable Number
 * https://leetcode.com/problems/find-the-maximum-achievable-number/
 * 
 * Given two integers, num and t. A number is achievable if it can become equal to num after applying the following operation:

Increase or decrease the number by 1, and simultaneously increase or decrease num by 1.
Return the maximum achievable number after applying the operation at most t times.

 

Example 1:

Input: num = 4, t = 1

Output: 6

Explanation:

Apply the following operation once to make the maximum achievable number equal to num:

Decrease the maximum achievable number by 1, and increase num by 1.
Example 2:

Input: num = 3, t = 2

Output: 7

Explanation:

Apply the following operation twice to make the maximum achievable number equal to num:

Decrease the maximum achievable number by 1, and increase num by 1.
 

Constraints:

1 <= num, t <= 50
 */

function theMaxAchievableX(num, t) {
  return num + 2 * t
}

/**
 * Even though num and the target start with the same value, the target can exceed num because each operation increases the target by an additional amount. Each operation allows you to increase both num and the target by 1. Therefore, over t operations, the target increases by 2 * t, while num increases by only t. This is why the maximum achievable target is calculated as num + 2 * t
 */