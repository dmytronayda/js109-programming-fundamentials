/*
- leap year - every 4 years if year is not % 100 -> in this case it's not a leap year if it's also not divisible by 400
- input is a number
- output is a boolean depending on whether the integer input is a leapYear or not

Examples:
- isLeapYear(2017); // 2017 % 400 => false = 2017 % 4 => false
- isLeapYear(1600); // 1600 % 400 => true
- isLeapYear(1500); // 1500 % 400 => false = 1500 % 100 => true
- isLeapYear(1512); // 1500 % 400 => false = 1512 % 100 => true
- isLeapYear(1000); // 1000 % 400 => false = 1000 % 100 => true 

Algorithm:
- check if number is divisible by 400 evenly => if yes return true
- if not, check if number is divisible by 100 evenly if yes return false
- if not, check if number is divisible by 4 evenly if yes return true
*/

function isLeapYear(year) {
  if (year % 400 === 0) return true;
  if (year % 100 === 0) return false;
  if (year % 4 === 0) return true; 
  return false;
}

console.log(isLeapYear(2016));      // true
console.log(isLeapYear(2015));      // false
console.log(isLeapYear(2100));      // false
console.log(isLeapYear(2400));      // true
console.log(isLeapYear(240000));    // true
console.log(isLeapYear(240001));    // false
console.log(isLeapYear(2000));      // true
console.log(isLeapYear(1900));      // false
console.log(isLeapYear(1752));      // true
console.log(isLeapYear(1700));      // false
console.log(isLeapYear(1));         // false
console.log(isLeapYear(100));       // false
console.log(isLeapYear(400));       // true