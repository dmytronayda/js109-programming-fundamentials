/**
 * Notes:
 * - if array of digits ends with `-` => value - digit
 * - else value - digit
 * - return value
 */

function stringToInteger(string) {
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
    '-' : '-'
  } 

  let arrayOfChars = string.toLowerCase().split('').map(char => digits[char]);
  let value = 0;
  if (arrayOfChars[0] === '-') {
    arrayOfChars.shift();
    arrayOfChars.forEach(digit => (value = (10 * value) - digit));
  } else {
    if (arrayOfChars[0] === '+') {
      arrayOfChars.shift();
    }
    arrayOfChars.forEach(digit => (value = (10 * value) + digit));
  }
  
  return value;
}

console.log(stringToInteger('121') === 121);
console.log(stringToInteger('-121') === -121);
console.log(stringToInteger('-4587') === -4587);
console.log(stringToInteger('1') === 1);