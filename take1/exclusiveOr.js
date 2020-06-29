/**
 * Notes:
 * - takes 2 arguments
 * - returns `true` if exactly one argument is truthy and `false` otherwise
 * 
 * Examples: 
 * console.log(xor(5, 0)); // => true
 * console.log(xor(false, true)); // => true
 * console.log(xor(1, 1)); // => false
 * console.log(xor([], {})); // => false
 * 
 * Algorithm:
 * - check if (1st argument is truthy AND 2nd arg is falsy) OR (1st argument is falsy AND 2nd arg is truthy)
 *  - return true
 * - everything else return false
 */

function xor(param1, param2) {
  if ((param1 && !param2) || (param2 && !param1)) {
    return true;
  } else {
    return false;
  }
}

console.log(xor(5, 0));        // => true
console.log(xor(false, true)); // => true
console.log(xor(true, false)); // => true
console.log(xor(1, 1));        // => false
console.log(xor([], {}));      // => false
console.log(xor(true, true));  // => false
console.log(xor(0, true));     // => true
console.log(xor(true, 0));     // => true
console.log(xor('', true));    // => true
console.log(xor(1, 0));        // => true