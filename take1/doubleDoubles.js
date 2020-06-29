/**
 * Notes: 
 * - double number is the even length number (number.toString().length % 2 === 0) && whose left side digits are exactly the same as its right side digits
 * - function should return a number * 2 if not a double number
 * - and if double number return it as is
 * 
 * 
 * Examples: 
 * console.log(twice(44)); // 44
 * console.log(twice(33)); // 33
 * console.log(twice(444444)); // 444444
 * console.log(twice(123123)); // 123123
 * console.log(twice(5555)); // 5555
 * console.log(twice(51)); // 102
 * console.log(twice(4241)); // 8482
 * 
 * Algorithm:
 * - check if double number (separate function)
 *  - declare a stringNum var and assign to number.toString()
 *  - if ( stringNum.length % 2 === 0) continue to check
 *    - declare a halfString variable and assign to stringNum.length / 2 
 *    - check if (stringNum.slice(0, halfString) === stringNum.slice(halfString)) 
 *      - return true 
 * 
 * - main function twice:
 *  - if double number
 *    - return number
 *  - else 
 *    - return number * 2
 */

function doubleNum(number) {
  let stringNum = number.toString();
  if (stringNum.length % 2 === 0) {
    let halfString = stringNum.length / 2;
    if (stringNum.slice(0, halfString) === stringNum.slice(halfString)) {
      return true;
    }
  }
}

function twice(number) {
  if (doubleNum(number)) return number;
  return number * 2;
}

console.log(twice(44)); // 44
console.log(twice(33)); // 33
console.log(twice(444444)); // 444444
console.log(twice(123123)); // 123123
console.log(twice(5555)); // 5555
console.log(twice(51)); // 102
console.log(twice(4241)); // 8482
console.log(twice(5150)); // 10300