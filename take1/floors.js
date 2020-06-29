/*
Notes: 
- input is a number
- output is an array
- building always starts with 1 block
- on each floor 2 blocks are added
- last floor length is full of blocks: 
  numOfFloors 6 + numOfFloors - 1 = 11 
  numOfFloors 5 + numOfFloors - 1 = 9
  

Algorithm:
- declare a result array
- declare NumOfBlocks and assign it to 1
- get midPoint index = math.floor((input num + input num - 1) / 2)
- loop from 0 till the (input num + input num - 1)
  - on each iteration
  - declare a currentString variable and initiate it with spaces repeat midPoint times + 
                              BLOCK repeat NumOfBlocks times + spaces repeat midPoint times
  - reassign midPoint to midPoint - 1
  - reassign NumOfBlocks to NumOfBlocks + 2
- return array
*/
const BLOCK = '*';
const SPACE = ' ';

function towerBuilder(nFloors) {
  let results = [];
  let numOfBlocks = 1;
  let spaces = Math.floor((nFloors * 2 - 1) / 2);
  
  for (let floor = 0; floor < nFloors; floor += 1) {
    let currentString = SPACE.repeat(spaces) +
                        BLOCK.repeat(numOfBlocks) +
                        SPACE.repeat(spaces);
    results = results.concat(currentString);
    spaces -= 1;
    numOfBlocks += 2;
  }
  
  return results.forEach(floor => console.log(floor));
}

console.clear();
towerBuilder(10);