/*
Notes: 
- input is 2 strings
- returns shorterStr + longerStr + shorterStr

Example:
shortLongShort('fine', 'awesome'); // 'fineawesomefine'

Algorithm:
- if input1 length is bigger than input2 length return input2input1input2
- else return input1input2input1
*/

function shortLongShort(str1, str2) {
  if (str1.length > str2.length) {
    return str2 + str1 + str2;
  } 
  return str1 + str2 + str1;
}

console.log(shortLongShort('fine', 'awesome'));