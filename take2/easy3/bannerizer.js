/*
Write a function that will take a short line of text, and write it to the console log within a box.

Examples:

logInBox('To boldly go where no one has gone before.');
will log on the console:

+--------------------------------------------+
|                                            |
| To boldly go where no one has gone before. |
|                                            |
+--------------------------------------------+
logInBox('');
+--+
|  |
|  |
|  |
+--+
You may assume that the output will always fit in your browser window.

Notes:
- input is a string
- output is an array of strings
  - 0th index string initial value is "+--+"
  - 1st index string initial value is "|  |"...

let BOX = ["+--+",
"|  |",
"|  |",
"|  |",
"+--+"];

Algorithm: 
- get inputString length
- update the box array based on the input length: 
  - for 0th and box[box.length - 1] elements => repeat '-' inputString length times and add this string after 1st index element
  - for 1st and box[box.length - 2] elements => repeat ' ' inputString length times and add this string after 1st index element
  - for 2nd element => paste the string after 1st element index
- for each updated box element log it to the console
*/

const BOX = ["+--+",
  "|  |",
  "|  |",
  "|  |",
  "+--+"
];

const BORDER_LINE_CHAR = '-';
const SPACE = ' ';

function logInBox(string = '') {
  let times = string.length;
  BOX.forEach((line, index) => {
    let leftPart = line.slice(0, 2);
    let rightPart = line.slice(2);
    if (index === 2) {
      console.log(leftPart + string + rightPart);
    } else if (index === 0 || index === BOX.length - 1) {
      console.log(leftPart + BORDER_LINE_CHAR.repeat(times) + rightPart);
    } else {
      console.log(leftPart + SPACE.repeat(times) + rightPart);
    }
  })
}

logInBox('To boldly go where no one has gone before.');
logInBox();