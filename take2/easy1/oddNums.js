/**
 * Notes:
 * - log all numbers from 1 to 99 inclusive to the console. 
 * Log numbers on separate lines
 * 
 * - input is a max odd number
 * - output is an array of odd numbers from 1 to maxOdd number inclusive
 * 
 * Examples:
 * oddNums(99); // [1, 3, 5, 7, ... , 99]
 * oddNums(101); // [1, 3, 5, 7, ... , 101]
 * 
 * Algorithm:
 * - declare a odds variable and assign to empty array
 * - loop from 1 to maxOdd number and increase the counter by 1 on each iteration
 *   - on each iteration check if number is odd and add to the result array
 * - for each number in the odds, print it to the console
 */

function oddNums(maxOdd) {
  let odds = [];
  for (let counter = 1; counter <= maxOdd; counter += 1) {
    if (counter % 2 !== 0) odds.push(counter);
  }
  odds.forEach(number => console.log(number));
}

// oddNums(99); // [1, 3, 5, 7, ... , 99]
oddNums(101); // [1, 3, 5, 7, ... , 101]