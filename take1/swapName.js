/**
 * Write a function that takes a string argument consisting of a first name, a space, and a last name, 
 * and returns a new string consisting of the last name, a comma, a space, and the first name.

Examples:

swapName('Joe Roberts');    // "Roberts, Joe"
swapName('Dima Naida');     // "Naida, Dima"

Notes:
- input is a string
- output is a string

Algorithm:
- split full name into array of names
- return array[1] + ', ' + array[0]
 */

let swapName = string => {
  let fullNameArr = string.split(' ');
  return `${fullNameArr[fullNameArr.length - 1]}, ${fullNameArr.slice(0, fullNameArr.length - 1).join(' ')}`
}

console.log(swapName('Joe Roberts'));    // "Roberts, Joe"
console.log(swapName('Dima Naida'));     // "Naida, Dima"
console.log(swapName('Olena Naida'));    // "Naida, Olena"
console.log(swapName('Olena Vasylivna Naida'));    // "Naida, Olena Vasylivna"
console.log(swapName('Karl Oskar Henriksson Ragvals'));    // "Ragvals, Karl Oskar Henriksson"