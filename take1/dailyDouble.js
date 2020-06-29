/**
 * Notes:
 * - input is a string
 * - output is a string with all consecutive (coming one after another) duplicate chars collapsed into a single char
 * 
 * Examples: 
 * crunch("ddaillllly douuuble") === "daily double" // true
 * crunch("ggggggggg") === "g" // true
 * crunch("4444iiiiiiiiibbc") === "4ibc" // true
 * 
 * Algorithm:
 * - declare a currentChar variable and assign it to empty string ""
 * - declare a result array
 * - declared a variable stringArr and assign it to the value of the array of chars = split the string into the array of individual characters
 * - for each character in the stringArr
 *   - if element is not the same as the currentChar => reassign current char
 *   - push currentChar to the resultArr  
 *   - reassign currentChar to element
 * - convert result array to string 
 * - return string
 */

function crunch(string) {
  let resultArr = [];
  let stringArr = string.split('');
  let currentChar = '';

  stringArr.forEach(element => {
    if (element !== currentChar) {
      resultArr.push(element);
      currentChar = element;
    }
  });
  
  
  
  return resultArr.join('');
}


// console.log(crunch("ddaillllly douuuble") === "daily double"); // true
// console.log(crunch("ggggggggg") === "g"); // true
// console.log(crunch("4444iiiiiiiiibbc") === "4ibc"); // true

crunch("dddddddddddddaillllly douuuble");
crunch("ddaillllly douuuble");
crunch("ggggggggg");
crunch("4444iiiiiiiiibbc");