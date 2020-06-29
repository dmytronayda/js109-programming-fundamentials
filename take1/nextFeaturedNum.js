/**
 * Notes: 
 * - input is an integer
 * - output is next featured number greater than integer
 * - featured number is an odd number that os a multiple of 7 (7, 21) with all digits appearing exactly once (133 is not featured num since digit 3 appears twice)
 * - max featured num is 9876543201
 * 
 * Examples:
 * featured(12); // 21
 * featured(20); // 21
 * featured(21); // 35
 * 
 * Algorithm:
 * - check if featured number
 *  - num is divisible by 2 and by 7
 *  - num has only unique digits
 *     - declare an object seen
 *     - convert the number to string, split on every digit
 *     - loop over the digits
 *        - if current digit can be found in seen object seen[digits[index]] === digit
 *        - return false
 *     - else push the digit to seen object
 *     -  if no repetition in the end of the loop - number is featured; return true
 * 
 * - check if number is smaller than pr === 9876543201
 * 
 * - loop while nextFeatured <= input
 *   - on each iteration increase nextFeatured by 7 
 *   - check if nextFeatured in a featured num
 *   - return if yes
 * - return an error message
 */


function allUnique(number) {
  let seen = {};
  let digitsArr = number.toString().split('');

  for (let index = 0; index < digitsArr.length; index += 1) {
    if (seen[digitsArr[index]]) return false;
    seen[digitsArr[index]] = true;
  }

  return true;
}


function toOddMultipleOf7(number) {
  do {
    number += 1;
  } while (number % 2 === 0 || number % 7 !== 0);
  return number;
}

function featured(number) {
  const MAX_FEATURED = 9876543201;
  let featuredNum = toOddMultipleOf7(number);

  do {
    if (allUnique(featuredNum)) return featuredNum;
    featuredNum += 14;
  } while (featuredNum < MAX_FEATURED);

  return 'There is no possible number that fulfills those requirements.';
}


console.log(featured(9876543200)); // 9876543201
