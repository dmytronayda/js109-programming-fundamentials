/**
 * Notes:
 * - input is a string
 * - output is a sting with staggred capitalization scheme
 * 
 * Algorithm: 
 * - remove the non-alphabetic chars
 * - split the string to words
 * - loop over the array of words and map words
 *    - split the word into array of chars
 *      - if char index is odd
 *        - capitalize the char
 *      - else lowercase the char
 * - join words back to string
 * - return the string
 */

function staggeredCase(string) {
  let needToUppercase = true;

  return string
    .split("")
    .map(function (char) {
      if (char.match(/[a-z]/i)) {
        let updatedChar;
        if (needToUppercase) {
          updatedChar = char.toUpperCase();
        } else {
          updatedChar = char.toLowerCase();
        }

        needToUppercase = !needToUppercase
        return updatedChar;
      }
      return char;
    })
    .join("");
}
console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs");