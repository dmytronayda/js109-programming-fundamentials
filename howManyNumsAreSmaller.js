/**
 * @param {number[]} nums
 * @return {number[]}
 
 Notes: 
 - input is an array
 - for each element find how many numbers in the array are smaller than itself
 
 Examples: 
 console.log(smallerNumbersThanCurrent([4, 1, 1, 3, 5])) // [3, 0, 0 , 2, 4]
 console.log(smallerNumbersThanCurrent([2, 1])) // [1, 0]
 console.log(smallerNumbersThanCurrent([2, 101])) // Invalid input
 
 Algorithm: 
 - check if valid input
 - if valid: 
  - map each element in an array
    - initiate counter to 0
    - check if current number is bigger than any other number in an array
      - loop over all other elements in the array except current one!
          - if current one is bigger than a given number => increase counter by 1
          - return a final counter number in place of the current element
 */

function validInput(array) {
  if (array.length >= 2 &&
      array.length <= 500) {
      return (!(array.map(element => {
          return (element >= 0 && element <= 100) ? true : false;
      })).includes(false));
  }
}

var smallerNumbersThanCurrent = function(nums) {
  if (validInput(nums)) {
      return nums.map(element => {
          let counter = 0;
          nums.forEach(number => {
              if (element !== number && element > number) {
                  counter += 1;
              }
          })
          return counter;
      })
  }
};

console.log(smallerNumbersThanCurrent([4, 1, 1, 3, 5])) // [3, 0, 0 , 2, 4]
console.log(smallerNumbersThanCurrent([2, 1])) // [1, 0]
console.log(smallerNumbersThanCurrent([2, 101])) // Invalid input
console.log(smallerNumbersThanCurrent([7, 7, 7, 7, 7, 7, 7])) // Invalid input

/**
 * On line 25 function `validInput` is declared with one parameter `array`. 
 * On line 26, if statement is declared. The condition of the if statement checks if `array` argument length is within 
 * exercise limits. If it is and all array elements are within limits too, it returns `true` which is a truthy value.
 * 
 * On line 34, `smallerNumbersThanCurrent` function expression is defined with one parameter `nums`. 
 * On line 25, if statement is declared. The condition of the if statement checks if return value of invoking `validInput` function with `nums`
 * is truthy.
 * If `nums` is a valid input: 
 *  - return the return value of `.map` method invokation on the passed in argument `nums`
  *  - `.map()` array method is called on the `nums` (outer loop). Each element from the calling array is passed to the callback in turn and assigned to the local callback function argument `element`.
  *  - on line 37 variable `counter` is declared ans initialized with the number 0
  *  - on line 38, `.forEach()` method is called on the `nums` array (inner loop). Each element from the calling array is passed to the callback in turn and assigned to the local callback function argument `number`.
  *    - on line 39 if statement is declared. The condition of the if statement checks if current `element` value from the outer loop: 
  *      - does not equal to the inner loops argument `number` AND
  *      - is bigger than the inner loops argument `number`
  *        - if both conditions are met, value of the `counter` variable is reassigned to its current value + 1
  *    - `counter` value is placed a new array created by `.map` method invocation.
 */