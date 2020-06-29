/**
 * - input a string
 * - output is a string in a box
 * 
 * rules:
 * - box itself is composed of
 * line0 = `+-${string.length * '-'}-+`
 * line1 = `|-${string.length * '-'}-|`
 * line2 = `|-${string}-|`
 * line3 = `|-${string.length * '-'}-|`
 * line4 = `+-${string.length * '-'}-+`
 * 
 * - compose a box out of the console.log function calls line by line
 * - make a function that converts input string to the string of dashes with the same length
 * - input string of dashes on lines 0 and 4
 * - print the result to the console
 */
function stringOfchars(string, char) {
  let stringOfChars = char.repeat(string.length + 2);
  return stringOfChars;
}

function logInBox(string) {
  console.log(`+${stringOfchars(string, '-')}+`);
  console.log(`|${stringOfchars(string, ' ')}|`);
  console.log(`| ${string} |`);
  console.log(`|${stringOfchars(string, ' ')}|`);
  console.log(`+${stringOfchars(string, '-')}+`);
}
console.clear();
logInBox('Olenka is strong and awesome. If only she stops whining before doing it anyways. 😇');