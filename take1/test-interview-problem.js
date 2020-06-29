// You are given an array strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

// #Example: longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"

// n being the length of the string array, if n = 0 or k > n or k <= 0 return "".



/*


input: one array, one integer
output: a string (could be empty, if array is empty, integer is 0 or negative, or  if integer is larger than array is long)

(longestConsec(["itvayloxrp","wkppqsztdkmvcuwvereiupccauycnjutlv","vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2)

human algorithm

if the array size is less than k return ""

variable to track current length = 0  maxLength
variable to track currently longest string = ""

iterate through the array

for each element slice the array k elements from that idx to k - 1  .... [a, b, c, da]  k = 2... [a, b].join .... b, c -> bc, cda

use for loop, and I have the index

let currentString = arr.slice(idx, idx + k).join("")

in each iteration after you create that str (slicing the array and joining it)...you check the length of it. If it is greated than maxLength, reassign maxLength to that value and reassign longestString to that string



*/

const longestConsec = function(array, int) {
  
  if (array.length < int || int < 1) return "";
  
  let maxLength = 0;
  let longestString = "";
  
  for (let index = 0; index < array.length; index += 1) {
    let currentString = array.slice(index, index + int).join("");
    if (currentString.length > maxLength) {
      maxLength = currentString.length;
      longestString = currentString;
    }
  }
  return longestString;
}




console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2) === "abigailtheta"); // true
console.log(longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1) === "oocccffuucccjjjkkkjyyyeehh"); // true
console.log(longestConsec([], 3) === ""); // true
console.log(longestConsec(["itvayloxrp","wkppqsztdkmvcuwvereiupccauycnjutlv","vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2) === "wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck"); // true
console.log(longestConsec(["wlwsasphmxx","owiaxujylentrklctozmymu","wpgozvxxiu"], 2) === "wlwsasphmxxowiaxujylentrklctozmymu"); // true
console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2) === ""); // true
console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3) === "ixoyx3452zzzzzzzzzzzz"); // true
console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 15) === ""); // true
console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 0) === ""); // true
