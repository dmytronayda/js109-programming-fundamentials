/**
 * Notes:
 * - randomly generate age number; age should be between 20 and 120
 * - prints a message + random age number to the console
 * 
 * Examples: 
 * teddysAge(); // 69
 * 
 * Algorithm: 
 * - get rand number using Math.floor(Math.random(20, 120))
 * - interpolate a number into the return string and print it to the console
 */

let teddysAge = (min, max) => {
  let randAge = Math.floor(Math.random() * (max - min + 1) + min);
  console.log(`Teddy is ${randAge} years old.`);
}

teddysAge(20, 120);
