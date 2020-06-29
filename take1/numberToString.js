/**
 * Notes: 
 * - convert a non-negative integer value to the string representation of that integer: 421 => "421"
 * 
 * Examples:
 * integerToString(4321);      // "4321"
 * integerToString(0);         // "0"
 * integerToString(5000);      // "5000"
 * integerToString(1234567890);      // "1234567890"
 * 
 * Algorithm: 
 * - input: number
 * - output: string
 * - get the rules array of subarrays - [[1, "1"], [2, "2"]...]
 * - create an array of individual numbers from the input number => requires separate function 
 *  - 432 => [4, 3, 2]
 *    - 432 % 10 = 2
 *    - 432 % 100 = 32 - 2 / 10 = 3
 *    - 432 % 1000 = 432 - 32 / 100 = 4
 *  - create a loop that stops once return value is of division by divisor === 0
 * - map each number from the individual nums to its string representation based on the rules subarray
 * - join result array and return  
 */

const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function integerToString(number) {
  let result = '';

  do {
    let remainder = number % 10;
    number = Math.floor(number / 10);

    result = DIGITS[remainder] + result;
  } while (number > 0);

  return result;
}

