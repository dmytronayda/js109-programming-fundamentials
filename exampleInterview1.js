/**
 * Notes:
 * - input is a positive integer
 * - return a next bigger number formed by the same digits
 * 
 * nextBiggerNumber(123456789); // 1234567_98
 * nextBiggerNumber(2017); // 20_71
 * nextBiggerNumber(2010007); // 20_7_000_1
 * 
 * Algorithm:
 * - split the number to array of digits
 * - loop over the array from last digit to first digit
 *   - loop over the rest of the array digits from next to last digit to first digit
 *    - if current next to last digit === 0, continue to the next iteration
 *    - if current next to last digit > last digit => reverse last and next to last digits
 * - if digits array is not mutated, return -1
 * - return mutated digit array joined on '' and converted to number
 */

function swap(array, elem1, elem2) {
  return array.map(element => {
    if (element === elem1) return elem2;
    else if (element === elem2) return elem1;
    else {
      return element;
    }
  })
}

function nextBiggerNumber(number) {
  let digits = number.toString().split('').map(digit => digit);
  for (let last = digits.length - 1; last >= 0; last -= 1) {
    for (let secondLast = last - 1; secondLast > 0; secondLast -= 1) {
      if (digits[Number(secondLast)] === 0) {
        continue;
      }
      if (digits[Number(secondLast)] < digits[Number(last)]) {
        digits = swap(digits, digits[Number(secondLast)], digits[Number(last)]);
        return Number(digits.join(''));
      }
    }
  }
  return -1; 
}

console.log(nextBiggerNumber(12)); // 21
console.log(nextBiggerNumber(513)); // 531
console.log(nextBiggerNumber(2017)); // 2071
console.log(nextBiggerNumber(111)); // -1
console.log(nextBiggerNumber(123456789)); // 123456798
console.log(nextBiggerNumber(531)); // -1