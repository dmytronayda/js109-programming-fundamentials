// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Example:

// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

/**
 * My test cases: 
 * twoSum([1, 2, 3, 4, 5], 9); // => [3, 4] 
 * twoSum([1, 2, 3, 4, 5], 3); // => [0, 1]
 * twoSum([1, 2, 3, 4, 5], 7); // => [2, 3]
 * twoSum([3, 3], 6) // => [0, 1]
 * twoSum([3, 2 ,3], 6) // => [0, 2]
 *
 * Algorithm: 
 - declare a result variable and assign it to empty array
 - loop over array elements starting element at index 0
    - loop over rest of the elements starting element at index of element + 1
      - if target - current element === value of the array elem from outer loop
        - results[0] assign to outer loop index 
        - results[1] assign to inner loop index
 - return results
 */


var twoSum = function (nums, target) {
  let results = [];
  for (let index = 0; index < nums.length; index++) {
    for (let anotherElem = index + 1; anotherElem < nums.length; anotherElem++) {
      if (target - nums[anotherElem] === nums[index]) {
        results[0] = index;
        results[1] = anotherElem;
      }
    }
  }
  return results;
};

console.log(twoSum([1, 2, 3, 4, 5], 9));
console.log(twoSum([1, 2, 3, 4, 5], 3));
console.log(twoSum([1, 2, 3, 4, 5], 7));
console.log(twoSum([3, 3], 6));
console.log(twoSum([3, 2, 3], 6));

/**
 * Code explanation: 
 * On line 31 I declare a function with the name `twoSum` using function expression. It has 2 parameters: `nums` and `target`.
 * 
 * In the body of the function: 
 * - on line 32 I declare a variable with name `results` and assign it to an empty array
 * - on line 33 I declare a `for` loop that iterates from index 0 of the value of the argument `nums` till `nums.length - 1`.
 * - on line 34 I declare another `for` loop that goes from index 1 of the value of the argument `nums` till `nums.length - 1`
 * 
 * It's worth mentioning that next iteration of the loop from line 33 does not start until inner loop's `anotherElem < nums.length` condition evaluates to a truthy value.
 * 
 * That is, `if` statement in the body of the inner for loop (lines 34 - 39 between the parenthesis) evaluates the `index` value from the outher loop to each other element in the `nums` array.
 * If `if` statement condition returns a truthy value, statements on the lines 36 and 37 are executed by JS engine: 
 * - index 0 of the `results` array is assigned to the value of `index` variable;
 * - index 1 of the `results` array is assigned to the value of `anotherElem` variable. 
 * 
 * On line 41 I explicitly return value of the `results` array. Otherwise, function would return a default value of `undefined`.
 */