/*
Next Featured Number Higher than a Given Value

A featured number (something unique to this exercise) is an odd number that is a
multiple of 7, with all of its digits occuring exactly once each. For example, 
49 is a featured number, but 98 is not (it is not odd), 97 is not (it is not a 
multiple of 7), and 133 is not (the digit 3 appears twice).

Write a function that takes an integer as an argument, and returns the next 
featured number greater than the integer. Issue an error message if there is no 
next featured number.

NOTE: The largest possible featured number is 9876543201.

Notes:
- input is a number
- output is a number that is nextFeatured num

- Rules: 
  - a featured num is an odd num (num % 2 === 1 && num % 7 === 0)
  - each digit of the featured num is unique (does not appear more than once)


Examples:

featured(12);           // 21
featured(20);           // 21
featured(21);           // 35
featured(997);          // 1029
featured(1029);         // 1043
featured(999999);       // 1023547
featured(999999987);    // 1023456987
featured(9876543200);   // 9876543201
featured(9876543201);   // "There is no possible number that fulfills those requirements."

Algorithm: 
- declare a isFeatured function
  - odd and divisible by 7: num % 2 === 1 && num % 7 === 0
  
  - all digits are unique (helper func)
    - initiate result variable and assign it to the empty object
    - transform a number to string and split to arr of digits then assign to 
    variable digits
    - iterate over the array of digits
      - object prop[index] = object prop[index] + 1 || 1;
    
    - filter out the properties in the array whose values > 1
    - if array len > 0 return false otherwise true

- iterate from num till max possible featured num (9876543201)
  - if number is featured return the number
*/
let uniqueDigits = num => {
  let result = {};

  let digits = num.toString().split('');
  for (let index = 0; index < digits.length; index += 1) {
    let digit = digits[index];
    result[digit] = result[digit] + 1 || 1;
  }

  let repetedVal = Object.entries(result)
  .filter(keyVal => {
    if (keyVal[1] > 1) return keyVal;
  })
  
  return repetedVal.length > 0 ? false : true;
}

let isFeatured = num => {
  if (num % 2 !== 0 && num % 7 === 0) {
    return uniqueDigits(num);
  }
  return false;
}

let featured = num => {
  if (num >= 9876543201) return "ERROR: There is no possible number that fulfills those requirements.";
  for (let index = num + 1; index <= 9876543201; index += 1) {
    if (isFeatured(index)) return index;
  }
  
}

console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543200));   // 9876543201
console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."