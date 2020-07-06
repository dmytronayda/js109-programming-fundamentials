/*
Name Swapping
Write a function that takes a string argument consisting of a first name, a space,
and a last name, and returns a new string consisting of the last name, a comma, 
a space, and the first name.

Examples:

swapName('Joe Roberts');    // "Roberts, Joe"
*/

let swapName = name => {
  let [first, last] = name.split(' ');
  return `${last}, ${first}`;
}

console.log(swapName("Dmytro Naida"));  // Naida, Dmytro
console.log(swapName("Joe Roberts"));   // Roberts, Joe