/*
https://leetcode.com/problems/two-sum/

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
 

Constraints:

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.
 

Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?
*/

var twoSum = function(nums, target) {
  for(let i = 0; i < nums.length; i++){
    for(let j = 1; j < nums.length; j++){
      if(nums[i] + nums[j] === target && i !== j){
        return [i, j]
      }
    }
  }
};

//Runtime: 168 ms, faster than 22.83% of JavaScript online submissions for Two Sum.
//Memory Usage: 39.8 MB, less than 61.91% of JavaScript online submissions for Two Sum.


var twoSum = function(nums, target) {
  for(let i = 0; i < nums.length; i++){
    for(let j = i + 1; j < nums.length; j++){
      if(nums[i] + nums[j] === target && i !== j){
        console.log(i,j)
        return[i,j]
      }
    }
  }
};
// Runtime: 124 ms, faster than 36.67% of JavaScript online submissions for Two Sum.
// Memory Usage: 40.9 MB, less than 28.17% of JavaScript online submissions for Two Sum.

/*
Alternate Solutions Explained:
https://leetcode.com/problems/two-sum/discuss/722895/JavaScript-solution-explained%3A-3-ways-to-solve-the-problem.

Video Examples:
https://leetcode.com/problems/two-sum/discuss/1621820/Optimal-Solution-Explained
*/