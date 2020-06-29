/*
Examples:
Enter the length of the room in meters:
10
Enter the width of the room in meters:
7
The area of the room is 70.00 square meters (753.47 square feet).

Algorithm:
- readlineSync.question len
- readlineSync.question width
- print len * width 
  - should be 2 zeros after the int part
  - should be converted to sq feet
*/

let readlineSync = require("readline-sync");
const SQMETERS_TO_FEET = 10.7639;

let length = readlineSync.question(`Enter the length of the room in meters: `);
let width = readlineSync.question(`Enter the width of the room in meters: `);
let area = Number(length * width).toFixed(2);
let areaInFeet = (area * SQMETERS_TO_FEET).toFixed(2);
console.log(`The area of the room is: ${area} square meters (${areaInFeet} square feet).`);


// let number = 10.98882;
// console.log(number.toFixed(3)); // '10.989' last digit is rounded
// console.log(typeof number.toFixed(3)); // 'string'