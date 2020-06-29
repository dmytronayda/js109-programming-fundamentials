/**
 * Notes: 
 * - takes a year (number) as an input
 * - returns a century (string) as an output: century number + "st", "nd", "rd", or "th"
 * - new centuries begin in years that end with 01. years 1901 - 2000 comprise 20th century
 * 
 * Examples: 
 * console.log(century(2020)); // 21st
 * console.log(century(16)); // 1st
 * console.log(century(1800)); // 18th
 * console.log(century(1801)); // 19th
 * console.log(century(2101)); // 22nd
 * 
 * Algorithm: 
 * - define a century number based on the input
 *  - if number / 100 result in absolute num
 *    - if absolute number is less than result of division
 *    - add 1 to century and return abs value of the number
 * - convert to a string result num + respectful string ending
 *   - define an object of appropriate endings
 *   - if string of century ends with 1 return century + appropriate property value
 */

function getCentury(number) {
  let century = number / 100;
  if (century > Math.floor(century)) {
    century = Math.floor(century) + 1;
  }
  return century;
}

function century(number) {
  const endings = {
    one: "st",
    two: "nd",
    three: "rd",
    eleven: "th",
  };
  let century = getCentury(number).toString();
  let lastChar = century[century.length - 1];
  if (century === "11") return century + endings.eleven;
  if (century === "12") return century + endings.eleven;
  if (century === "13") return century + endings.eleven;
  if (lastChar === "1") return century + endings.one;
  if (lastChar === "2") return century + endings.two;
  if (lastChar === "3") return century + endings.three;
  return century + "th";
}

console.log(century(2020)); // 21st
console.log(century(16));   // 1st
console.log(century(1800)); // 18th
console.log(century(1201)); // 13th
console.log(century(1100)); // 11th
console.log(century(1801)); // 19th
console.log(century(2101)); // 22nd