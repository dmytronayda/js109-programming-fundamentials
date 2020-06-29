/**
 * Notes:
 * - input is a string
 * - output is a string with lowercase letters changed to uppercase and every uppercase letter changed to lowercase
 * 
 * Examples:
 * swapCase("Dima"); // dIMA
 * swapCase("javaScript"); // JAVAsCRIPT
 * 
 * Algo: 
 * - initiate the result string
 * - loop over the string characters
 *    - if char is a lowercase letter
 *       - uppercase it and concat to result string
 *    - else
 *       - lowercase it and concat to result string
 * - return result string
 */

function isLowercase(char) {
  return /[a-z]/.test(char);
}

function swapCase(string) {
  return string
    .split('')
    .map(char => {
      if (isLowercase(char)) {
        return char.toUpperCase();
      }
      return char.toLowerCase();
    })
    .join('');
}

console.log(swapCase('CamelCase')); // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV')); // "tONIGHT ON xyz-tv"