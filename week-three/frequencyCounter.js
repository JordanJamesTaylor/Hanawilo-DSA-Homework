/*
    Given an array nums of size n, return the majority element. 
    
    The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the 
    majority element always exists in the array. 
    
    Please solve using a linear time complexity and using the frequency counter pattern  
    
    Constraints:
    
    n == nums.length 
    1 <= n <= 5 * 104 
    -109 <= nums[i] <= 109 
    
    @param {number[]} nums 
    @return {number}
    
    *** BRUTE FORCE SOLUTION ***

    1. Create a memo object
        1a. Property = element in array 
        1b. Value = frequency the element appears in the array

    2. Create variable to hold the most frequently appearing element 

    3. Loop through array, populate memo object

    4. Nest loops through memo object
        4a. Loop one has current property
        4b. Loop two goes through all other properties in the array
        4c. Check frequencies from loop one and two
        4d. If loop two has a larger frequency value, set majorityEl as that prop

    5. Return majorityEl

    Time: O(n²)
    Space: O(1)

    *** LINEAR SOLUTION **

    1. Create a memo object
        1a. Property = element in array 
        1b. Value = frequency the element appears in the array

    2. Create counter to record the highest frequency value

    3. Create majorityEl to hold the most frequently appearing element

    4. Loop through array and populate memo

    5. Loop through memo
        5a. Check current props value against counter
        5b. If current value if greater, set majorityEl to prop
    
    6. Return majorityEl

    Time: O(n)
    Space: O(1)

    *** EDGE LINEAR SOLUTION **

    Edge Cases:
        Array is empty --> return null
        More than one elements have the same frequencies 

    1. Repeat steps 1 - 4 of linear solution but set majorityEl to an empty array

    2. Loop through memo
        2a. Check prop value against counter
        2b. If value is the same as counter, append to array
        2c. If the value is greater than the counter, empty...
            ...the aray and add prop
    
    3. After looping over memo check length of majorityEl array
        3a. If the length is one, return just the element
        3b. Otherwise turn all elements to number type, then return array

    Time: O(n)
*/ 

function bruteForceSolution(nums){
    let memo = {}; // Assignment --> O(1)
    let majorityEl = 0; // Declaration --> O(1)

    for(let val of nums){ // Iteration --> O(n)
        memo[val] = (memo[val] || 0) + 1; // Assignment --> O(n)
    }

    for(let prop1 in memo){ // Iteration --> O(n)
        for(let prop2 in memo){ // Iteraion --> O(n)
            if(memo[prop1] > memo[prop2]){ // Comparison --> O(1)
                majorityEl = prop1; // Assignment --> O(1)
            }
        }
    }

    return majorityEl; // Return --> O(1)
};

function solution(nums){
    let n = nums.length;
    let memo = {};

    for(const num of nums){
      memo[num] = (memo[num] || 0) + 1;
  
      if(memo[num] > n/2 ){
        return num;
      }
    }
    
    return -1;
};

// console.log(solution([3,2,3])); // 3  
// console.log(solution([2,2,1,1,1,2,2,5,5,6,7])); // 2
// console.log(solution([4,4,1,1,1,4,4])); // 4
// console.log(solution([2,2,1,1,1])); // 1