/**
 * Notes: 
 * - input: 1 argument - number
 * - output: string of numbers of 1s and 0s (starting with 1)
 * - the length of the output string should match the input integer
 * 
 * Examples: 
 * console.log(stringy(4)); // "1010"
 * console.log(stringy(8)); // "10101010"
 * console.log(stringy(5)); // "10101"
 * console.log(stringy(1)); // "1"
 * console.log(stringy(0)); // ""
 * 
 * Algorithm: 
 * - ask if input can be a negative num? if it can be use Math.abs() to convert to absolute num
 * - declare a result string = ""
 * - while result string len is less than arg num: (while result.length < 4)
 *  - if result string [len - 1] === 1 => result string + "0"
 *  - else result string + "1"
 * - return result string
 */

let stringy = num => {
  let resultStr = ""; 
  while (resultStr.length < num) {
    if (resultStr[resultStr.length - 1] === "1") {
      resultStr += "0";
    } else {
      resultStr += "1";
    }
  }
  return resultStr;
}

console.log(stringy(4)); // "1010"
console.log(stringy(8)); // "10101010"
console.log(stringy(5)); // "10101"
console.log(stringy(1)); // "1"
console.log(stringy(0)); // ""
console.log(stringy(9)); // "101010101"