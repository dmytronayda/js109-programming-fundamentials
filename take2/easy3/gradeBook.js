/*
Write a function that determines the mean (average) of the three scores passed to it, and returns the letter associated with that grade.

Numerical score letter grade list:

90 <= score <= 100: 'A'
80 <= score < 90: 'B'
70 <= score < 80: 'C'
60 <= score < 70: 'D'
0 <= score < 60: 'F'
Tested values are all between 0 and 100. There is no need to check for negative values or values greater than 100.

Notes: 
- input is a list of 3 numbers
- output is a string - respective representation of the mean value of the 3 input values

Examples:

getGrade(95, 90, 93);    // "A"
getGrade(50, 50, 95);    // "D"

Algorithm: 
- calculate the mean of 3 numbers
- return mean converted to a letter value
*/

let getGrade = (grade1, grade2, grade3) => {
  let meanGrade = Math.round((grade1 + grade2 + grade3) / 3);
  return toLetterGrade(meanGrade);
}

function toLetterGrade(number) {
  if (number <= 100 && number >= 90) return 'A';
  if (number <= 89 && number >= 80) return 'B';
  if (number <= 79 && number >= 70) return 'C';
  if (number <= 69 && number >= 60) return 'D';
  return 'F';
}


console.log(getGrade(95, 90, 93));    // "A"
console.log(getGrade(50, 50, 95));    // "D"