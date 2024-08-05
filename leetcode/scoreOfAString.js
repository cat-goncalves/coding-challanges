/**
 * Score of a String
 * https://leetcode.com/problems/score-of-a-string/description/
 * 
 * You are given a string s. The score of a string is defined as the sum of the absolute difference between the ASCII values of adjacent characters.

Return the score of s.

Example 1:
  Input: s = "hello"
  Output: 13

  Explanation:
    The ASCII values of the characters in s are: 'h' = 104, 'e' = 101, 'l' = 108, 'o' = 111. So, the score of s would be |104 - 101| + |101 - 108| + |108 - 108| + |108 - 111| = 3 + 7 + 0 + 3 = 13.

Example 2:
  Input: s = "zaz"
  Output: 50

  Explanation:
    The ASCII values of the characters in s are: 'z' = 122, 'a' = 97. So, the score of s would be |122 - 97| + |97 - 122| = 25 + 25 = 50.

Constraints:
  2 <= s.length <= 100
  s consists only of lowercase English letters.
 */

  // Brute Force
  function scoreOfString(s) {
    let ans = []

    for( let y = 0; y < s.length; y++){
        ans[y] = s.charCodeAt(y)
    }

    for(let x = 0; x < ans.length - 1; x++) {
        ans[x] = Math.abs(ans[x] - ans[x + 1])
    }
    ans.pop()
    return ans.reduce((a,c) => a + c, 0)
  }

  // Simple solution
  function scoreOfString2(s) {
    let score = 0
    
    for(let x = 0; x < s.length - 1; x++) {
        score += Math.abs(s.charCodeAt(x) - s.charCodeAt(x + 1))
    }
    return score
  }
  /**
  P-arameters
    s - string, 2-100 characters (never empty string), all lower case, no special charaters

  R-eturn
    score = sum of the absolute difference between ASCII values
    absolute difference: sum of all the differences

  E-xamples
  'hello'
  h' = 104, 'e' = 101, 'l' = 108, 'o' = 111
  |104 - 101| + |101 - 108| + |108 - 108| + |108 - 111| 
        = 3 + 7 + 0 + 3 = 13

  P-seudocode
    iterate through the array
    method for ASCII by index 
    - could store values in an empty array
    - use map to replace the character values
    find absolute sum:
    - difference for every character (subtraction), except the last character
    - those values should then be added together
    
    In the brute force solution I am moving between arrays and strings, but in the simple solution I can use a counter/score variable and avoid array methods altogether

*/