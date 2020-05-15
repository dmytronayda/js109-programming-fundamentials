/**
 * @param {number} x
 * @return {number}
 
 notes: 
 - input is a - number positive or negative int
 - output should reverse the number and return the new updated num
 - in case reverse starts with 0 (120 => 021), zero should be removed from the reversed number
 
 examples: 
 reverse(2010); // => 102
 reverse(2010000); // => 102
 reverse(221); // => 122 
 reverse(-109808) // => -808901
 
 algorithm: 
     - convert the number to an array
     - reverse the array elements
     - while reversed array starts with 0 
        - remove 0
     - if last array char is '-' unshift it as 0th element
     - convert from array to number
     - return reversed number
 */

const NEG_LIMIT = -2147483648

const POS_LIMIT = 2147483647

var reverse = function (x) {
  let reversedArr = x.toString().split('').reverse();

  while (reversedArr[0] === '0') {
    reversedArr.shift();
  }

  if (reversedArr[reversedArr.length - 1] === '-') {
    reversedArr = reversedArr.slice(0, reversedArr.length - 1);
    reversedArr.unshift('-');
  }

  if (Number(reversedArr.join('')) >= POS_LIMIT ||
    Number(reversedArr.join('')) <= NEG_LIMIT) {
    return 0;
  } else {
    return Number(reversedArr.join(''));
  }
};

console.log(reverse(2010)); // => 102
console.log(reverse(2010000)); // => 102
console.log(reverse(221)); // => 122 
console.log(reverse(-109808)) // => -808901
console.log(reverse(1534236469)) // => 0

/**
 * On line 28, a function with the name `reverse` is declared. It has one parameter `x`.
 * On line 29, a variable `reveredArr` and assign it to the value of:
 * - calling `.toString` method on the argument `x` to convert it to string
 * - chain with method `.split('')` to split the string into array of individual characters
 * - chain with `.reverse()` array method to reverse elements in the array
 * 
 * On line 31 `while` loop is declared with condition that checks if 0th index of the `reveredArr` array evaluates to string '0'
 * - while condition in the paranthesis evaluates to truthy value, JS engine executes statement on line 32
 *   - On line 32, `shift()` method is called on `reversedArr` array to remove 0th index element
 * 
 * On line 35 `if` statement is declared with condition that checks the value of the last element of `reversedArr` and 
 * evaluates it to string value '-'
 * - if condition in the paranthesis evaluates to truthy value, JS engine executes the statements on lines 36 and 37
 * - on line 36 variable `reversedArr` is reassigned to a value of shallow copy of the `reversedArr` from line 29
 * - on line 37, `unshift()` method is called on `reversedArr` array to add string value `-` to the beginning of the array
 * 
 * On line 40 `if` statement is declared with condition that checks: 
 * - return value of Number function called with the `reversedArr` array converted to a string using `.join()` method 
 * is more than or equal to the value of `POS_LIMIT` OR is it less or equal to the value of `NEG_LIMIT`
 *   - if condition in the parenthesis is truthy, JS engine explicitly returns 0 on line 42
 * - else, JS engine returns the value of Number function called with the `reversedArr` array converted to a string using `.join()` method
 */