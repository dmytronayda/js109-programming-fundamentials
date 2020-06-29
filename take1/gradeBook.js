/**
 * Notes: 
 * - determine a mean (average) of the 3 scores passed to it and retuns a letter associated with that grade
 * - rules defined for the grades
 * 
 * Examples: 
 * console.log(getGrade(90, 95, 80)); // B
 * console.log(getGrade(60, 95, 96)); // B
 * console.log(getGrade(60, 95, 96)); // F
 * console.log(getGrade(89, 95, 96)); // A
 * 
 * Algorithm: 
 * - calculate the average of 3 numbers - convert it to the integer
 * - if mean fits the creterion for the grade return grade
 * - return "F"
 */


let getGrade = (grade1, grade2, grade3) => {
  let mean = Math.floor((grade1 + grade2 + grade3) / 3);
  if (mean >= 90) return "A";
  if (mean >= 80) return "B";
  if (mean >= 70) return "C";
  if (mean >= 60) return "D";
  return "F";
}

console.log(getGrade(90, 95, 80)); // B
console.log(getGrade(60, 95, 96)); // B
console.log(getGrade(60, 60, 60)); // D
console.log(getGrade(59, 50, 60)); // F
console.log(getGrade(89, 95, 96)); // A