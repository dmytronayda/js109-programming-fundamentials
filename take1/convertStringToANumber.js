/**
 * input: string of digits
 * return: appropriate number as an integer
 * 
 * notes: 
 * - convert a string to an integer without using parseInt() String() and Number() methods
 * 
 * Examples: 
 * console.log(stringToInteger("123") == 123); // => true
 * console.log(stringToInteger("1")  == 123);  // => true
 * 
 * Algorithm: 
 * - get the object with key val pairs for each digit
 * - split the string to individual chars
 * - map chars from splitted string to the values in object
 * - convert each number to thousand, hundred, etc based on the position and sum them together
 */

function hexadecimalToInteger(string) {
  const digits = {
    0 : 0,
    1 : 1,
    2 : 2,
    3 : 3,
    4 : 4,
    5 : 5,
    6 : 6,
    7 : 7,
    8 : 8,
    9 : 9,
    a : 10,
    b : 11,
    c : 12,
    d : 13,
    e : 14,
    f : 15
  } 

  let arrayOfChars = string.toLowerCase().split('').map(char => digits[char]);
  let value = 0;
  arrayOfChars.forEach(digit => (value = (16 * value) + digit));
  return value;
}

console.log(hexadecimalToInteger("4D9f") === 19871);
