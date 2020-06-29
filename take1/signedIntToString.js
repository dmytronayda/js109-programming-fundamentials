// Examples: 
// signedIntegerToString(4321) => "+4321"
// signedIntegerToString(-3) => "-3"
// signedIntegerToString(0) => "0"


const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function signedIntegerToString(number) {
  let result = '';
  let sign = '';

  if (Math.sign(number) === 1) {
    sign = '+';
  } else if (Math.sign(number) === -1) {
    sign = '-';
  }

  do {
    let remainder = Math.abs(number) % 10;
    number = Math.floor(Math.abs(number) / 10);

    result = DIGITS[remainder] + result;
  } while (number > 0);



  return sign + result;
}

console.log(signedIntegerToString(4321));
console.log(signedIntegerToString(-4321));
console.log(signedIntegerToString(1));
console.log(signedIntegerToString(0));
console.log(signedIntegerToString(-41));