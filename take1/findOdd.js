/*
Notes:
- input is an array
- output is a number that appears odd (1, 3, 5, etc.) number of times

Examples
findOdd([1, 3, 3, 3, 6, 6, 67, 67, 90, 90, 1, 1, 1]); // 3

Algorithm:
- declare a count object
- loop over the array elements
  - if count object keys does not include current number
    - assign object[currentNum] = 1
  - else 
    - assign object[currentNum] += 1
- loop over the object key/value pair
  - if value is odd - return key
*/

function findOdd(A) {
  let count = {};
  A.forEach(element => {
    if (!Object.keys(count).includes(element.toString())) {
      count[element] = 0;
    } 
    count[element] += 1;
  })
  
  let oddCount = Object.entries(count)
    .filter(keyVal => {
    if (keyVal[1] % 2 !== 0) return keyVal;
  })

  return Number(oddCount[0][0]);
}

console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5])); //5 