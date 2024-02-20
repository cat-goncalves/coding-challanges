/**
 * https://www.codewars.com/kata/5a91a7c5fd8c061367000002/train/javascript
 * 
 * Minimum Steps Array

    Given an array of N integers, you have to find how many times you have to add up the smallest numbers in the array until their Sum becomes greater or equal to K.

    Notes:

    List size is at least 3.

    All numbers will be positive.

    Numbers could occur more than once , (Duplications may exist).

    Threshold K will always be reachable.

    Input >> Output Examples

    minimumSteps({1, 10, 12, 9, 2, 3}, 6)  ==>  return (2)
    Explanation:

    We add two smallest elements (1 + 2), their sum is 3 .

    Then we add the next smallest number to it (3 + 3) , so the sum becomes 6 .

    Now the result is greater or equal to 6 , Hence the output is (2) i.e (2) operations are required to do this .

    minimumSteps({8 , 9, 4, 2}, 23)  ==> return (3)
    Explanation:

    We add two smallest elements (4 + 2), their sum is 6 .

    Then we add the next smallest number to it (6 + 8) , so the sum becomes 14 .

    Now we add the next smallest number (14 + 9) , so the sum becomes 23 .

    Now the result is greater or equal to 23 , Hence the output is (3) i.e (3) operations are required to do this .

    minimumSteps({19,98,69,28,75,45,17,98,67}, 464)  ==>  return (8)
    Explanation:

    We add two smallest elements (19 + 17), their sum is 36 .

    Then we add the next smallest number to it (36 + 28) , so the sum becomes 64 .

    We need to keep doing this until the sum becomes greater or equal to K (464 in this case), which will require 8 Steps .

    Expected Time Complexity O(n Log n)
 */

    function minimumSteps(numbers, value){
      let sum = 0
      numbers.sort(function(a, b){return a - b})
    
      for(let x = 0; x < numbers.length; x++) {
        if ( numbers.reduce((a,c) => a + c) - numbers[numbers.length - 1] < value) {
          return numbers.length - 1
        } else if(sum < value) {
          sum += numbers[x]
        } else {
          return x - 1
        }
      }
    }

    function minimumSteps(numbers, value){
      return numbers.sort((a,b)=>a-b).filter((e,i)=> (value=value-e) > 0).length;
   }
    
    /**
    
      P-arameters
        array of n integers
          array.size >= 3
          all positive integers
          can repeat
        K, maybe this is value?
          will always be reachable
    
      R-eturn
        # of times you have to add the smallest number in the4 array until their sum reaches K
          how many addition operations do you have to do from smallest numbers to largest in order to reach K
          ?
    
      E-xamples
        minimumSteps({1, 10, 12, 9, 2, 3}, 6)  ==>  return (2)
          We add two smallest elements (1 + 2), their sum is 3 .
          Then we add the next smallest number to it (3 + 3) , so the sum becomes 6 .
          Now the result is greater or equal to 6 , Hence the output is (2) i.e (2) operations are required to do this .
    
      P-seudocode
        we know that we need to sum the numbers smallest to largest, so we should sort the array in ascending order
        1. sort array smallest to largest
        we also know that we need to iterate through the array and sum, while comparing it to the k value
        2. for loop
        3. conditional statement checking if the current sum was >= K
        we still need some way to kep count of the # od addition operations
          I believe there are two options here
            - instantiate a variable to hold the value of # of addition operations
            - is there a relationship with # of addition operations and the index?
    
    */