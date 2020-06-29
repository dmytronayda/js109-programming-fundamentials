/*
- input is a string
- output is a ASCII string value => sum of the ASCII values of every char in the input string

Examples: 
asciiValue('a'); //97 
asciiValue('Four score'); // 984

Algorithm:
- split the string into the arr of chars
- map each char to its ASCII value
- reduce the arr to the sum of ASCII values
*/

function asciiValue(str) {
  if (str === '') return 0;
  return str
  .split('')
  .map(char => char.charCodeAt())
  .reduce((asciiCode1, asciiCode2) => asciiCode1 + asciiCode2);
}

console.log(asciiValue('Launch School')); // 1251 
console.log(asciiValue(''));              // 0
console.log(asciiValue('Four score'));    // 984