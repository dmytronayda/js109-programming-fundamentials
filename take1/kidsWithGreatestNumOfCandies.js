/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 
 Problem: 
 - input an array of candies each kid has && extra candies
 - check if adding extra candies to given kid can make him/her a kidWithGreatsNumCandies
 - return an array (map each result to a boolean) 
 
 Examples: 
 console.log(kidsWithCandies([1, 2, 4, 6, 10], 5));  // [false, false, false, true, true]
 console.log(kidsWithCandies([1, 100], 50));  // [false, true]
 console.log(kidsWithCandies([50, 100], 50));  // [true, true]
 
 Algorith: 
 - check input is valid based on the constraints
   - 2 <= candies.length <= 100
   - 1 <= candies[i] <= 100
   - 1 <= extraCandies <= 50
 - if valid input is given
   - find largest number in the array
   - map over array and compare each element to the gretest element
      - return boolean value of evaluation element + extra candies is bigger or equal to the largest num 
   
 */

function validInput(candies, extraCandies) {
  if (candies.length >= 2 && 
      candies.length <= 100 &&
      extraCandies >= 1 && 
      extraCandies <= 50) {
      if (!(candies.map(element => (element >= 1 && element <= 100))).includes(false)) {
          return true;
      }
  } 
  
  return false;
}


var kidsWithCandies = function(candies, extraCandies) {
  if (validInput(candies, extraCandies)) {
      let largestNum = Math.max(...candies);
      let result = candies.map(element => {
          return ((element + extraCandies) >= largestNum);
      })
      return result;
  }
};

/**
 * On line 28, function `validInput` is declared with 2 parameters `candies` and `extraCandies`.
 * - on line 29 if statement is declared. The condition of the if statement checks whether a return value of the evaluation returns a truthy value.
 *  - if condition returns a truthy value, JS engine will execute and if statement on line 33. 
 *    - if statement on line 33 is declared. The condition of the if statement checks whether a return value of the evaluation returns a truthy value.
 *    - `.map()` method is called on the value of `candies` argument. Each element from the calling array is passed to the callback in turn and assigned 
 *      to the local callback function argument. For each iteration, `Array.prototype.map()` passes in the value of the current element to the callback, 
 *      executes the callback and places the return value of the callback in a new array. `.includes()` method is chained to the return value of the `.map` 
 *      method invokation. It evaluates if at least one element in the calling array evaluate to the passed in value of `false`.
 *      - if none of the `candies` elements are less than 1 or more than 100, if statement returns `true` on line 34.
 * 
 * On line 42, function `kidsWithCandies` expression is declared with 2 parameters: `candies` and `extraCandies`. 
 * - On line 43, if statement is declared. The condition of the if statement checks if the return value of the `validInput` function 
 *   invocation with passed in arguments `candies` and `extraCandies` returns a truthy value. If condition is truthy, local to the 
 *   if statement scope code will be executed (lines 43-49 between the parentheses)
 *    - On line 44, variable `largestNum` is declared and assigned to the return value of calling `Math.max` method on the list of the `candies` argument elements.
 *      This is to be noted that spread syntax is used to pass the list of the elements as an arguments to `Math.max` method. 
 *      If at least one of the arguments cannot be converted to a number, `NaN` is returned. That is passing an array data type value as an argument would return a `NaN`.
 *    - On line 45, variable `result` is assigned to the return value of calling `.map` method on the `candies` array.
 *      `.map()` method is called on the value of `candies`. Each element from the calling array is passed to the callback in turn and assigned 
 *      to the local callback function argument `element`. 
 *        - For each iteration, `Array.prototype.map()` passes in the value of the current `element` to the callback, 
 *          executes line 46 callback function and places the return value of the callback in a new array. The return value of the 
 *          callback on line 46 is a boolean type value: `true` or `false` depending on the result of evaluation `(element + extraCandies) >= largestNum`.
 *          That is, `true` or `false` will passed to the new array on each iteration.
 *    - On line 48, value of the variable `result` is returned.
 *          
 *   
 * 
 */