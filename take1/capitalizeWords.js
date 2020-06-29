/**
 * Notes:
 * - input is a string
 * - output is a string with the 1st char of each word capitalized and all other chars in lower case
 * 
 * Examples:
 * wordCap("today is a great day"); // Today Is A Great Day
 * wordCap("today is a gREAT day"); // Today Is A Great Day
 * 
 * Algorithm: 
 * - split the string to the array of words
 * - initiate result string
 * - loop through the array 
 *   - lowercase each word
 *   - capitalize 1st char of each word
 *   - concat the string to the result string
 * return result
 */

function wordCap(string) {
  return string
    .split(' ')
    .map(word => word[0].toUpperCase() + word.slice(1).toLowerCase()).join(' ');
}

wordCap('four score and seven'); // "Four Score And Seven"
wordCap('the javaScript language'); // "The Javascript Language"
wordCap('this is a "quoted" word'); // 'This Is A "quoted" Word'