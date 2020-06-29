/**
 * Notes:
 * - input is a string
 * - return an object with percentage [%] of chars in the string that are lowercase letters, % of chars in the string that are uppercase letters and % of chars that are neither
 * 
 * Examples:
 * letterPercentages("Dima IS AWESOME!"); // {lowercase: 20.00, uppercase: 60.00, neither: 20.00}
 * 
 * Algorithm: 
 * - get the length of the string
 * - get the match of the lowercase chars
 * *  - push to result object
 * - get the match of the uppercase chars
 * *   - push to result object
 * - get the rest of the chars
 * *   - push to result object
 * - return result object
 */

 function letterPercentages(string) {
   let strLength = string.length;
   let lowercaseLettersPercent = (string.match(/[a-z]/g).length / strLength * 100).toFixed(2);
   let uppercaseLettersPercent = (string.match(/[A-Z]/g).length / strLength * 100).toFixed(2);
   let neitherCharPercent = ((strLength - string.match(/[a-z]/g).length - string.match(/[A-Z]/g).length) / strLength * 100).toFixed(2);
   return {
     lowercase: lowercaseLettersPercent,
     upppercase: uppercaseLettersPercent,
     neither: neitherCharPercent
   }
 }

console.log(letterPercentages("Dima IS AWESOME!"));